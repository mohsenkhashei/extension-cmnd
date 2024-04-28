const ServiceType = require("../schemas/ServiceType");
const Personnel = require("../schemas/Personnel");
const Message = require("../schemas/Message");
const Task = require("../schemas/Task.js");
require("../schemas/Associations.js");
const transporter = require("../config/email.js");
const { Sequelize } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  call: async function (req, res, next) {
    let { service_type, room_id } = req.params;

    try {
      const serviceType = await ServiceType.findOne({
        where: Sequelize.where(
          Sequelize.fn("LOWER", Sequelize.col("title")),
          "LIKE",
          `%${service_type.toLowerCase()}%`
        ),
      });
      if (!serviceType) throw new Error("Service type not found");

      const targetPersonnelGroup = await Personnel.findAll({
        include: [
          {
            model: ServiceType,
            where: { id: serviceType.id },
          },
        ],
      });

      const message = await Message.findOne({
        where: { service_type_id: serviceType.id },
      });
      if (!message) throw new Error("Message not found for this service type");

      const newTask = await Task.create({
        token: uuidv4(),
        room_id: room_id,
        service_type_id: serviceType.id,
      });

      targetPersonnelGroup.map(async (personnel) => {
        const emailContent = `
          <p>Hello,</p>
          <p>There is a new task:</p>
          <ul>
            <li>Room ID: ${room_id}</li>
            <li>Service Type: ${serviceType.title}</li>
            <li>Task Token: ${newTask.token}</li>
          </ul>
          <p>Please click on the following link to claim the task:</p>
          <p><a href="http://localhost:8001/api/v1/claim-task?token=${newTask.token}&p_id=${personnel.id}">Claim Task</a></p>`;

        await transporter.sendMail({
          to: personnel.email,
          subject: "New Task Assignment",
          html: emailContent,
        });
      });

      return res.json({
        success: true,
        message: "Task created and emails sent successfully.",
      });
    } catch (error) {
      console.error("An error occurred:", error.message);
      return res.status(500).json({
        success: false,
        message: "Internal server error.",
      });
    }
  },

  claim: async function (req, res, next) {
    try {
      const { token, p_id } = req.query;

      if (!token || !p_id) {
        return res
          .status(400)
          .json({ error: "Token or personnel ID is missing." });
      }

      const personnel = await Personnel.findByPk(p_id);
      if (!personnel) {
        return res.status(404).json("Personnel not found.");
      }

      const task = await Task.findOne({ where: { token: token } });

      if (!task) {
        return res.status(404).json("Task is not found.");
      }

      if (task.personnel_id != null && task.claimed_at != null) {
        return res
          .status(404)
          .json("Task is already assigned to someone else.");
      }

      const serviceType = await ServiceType.findByPk(task.service_type_id);

      if (!serviceType) {
        return res.status(404).json({ error: "Service Type is not found." });
      }

      await task.update({ claimed_at: Date.now(), personnel_id: p_id });
      const message = `${serviceType.title} has been assigned to ${personnel.id}`;

      return res.status(200).json({ success: true, message: message });
    } catch (error) {
      return res.status(500).send("Internal server error.");
    }
  },
};
