const ServiceType = require("../schemas/ServiceType");
const Personnel = require("../schemas/Personnel");
const Task = require("../schemas/Task.js");

module.exports = {
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

  complete: async function (req, res, next) {
    try {
      const task_id = req.params.task_id;
      const task = Task.findByPk(task_id);

      if (!task) {
        return res.status(404).json({
          success: false,
          message: "Task not found",
        });
      }

      task.update({
        completed_at: Date.now(),
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  },

  getTasks: async function (req, res, next) {
    try {
      const personnel_id = req.params.personnel_id;
      const secret = req.params.secret;

      if (secret != "admin123") {
        return res.status(200).json({
          success: false,
          message: "You are not allowed to access this",
        });
      }

      const personnel = await Personnel.findByPk(personnel_id);

      if (!personnel)
        return res.status(404).json({
          success: false,
          message: "Personnel not found",
        });

      const tasks = await Task.findAll({
        where: {
          personnel_id: personnel_id,
        },
        include: {
          model: ServiceType,
          attributes: ["title"],
          as: "ServiceType",
        },
      });

      const mappedTasks = tasks.map((task) => ({
        service_type: task.ServiceType.title,
        room_id: task.room_id,
        created_at: task.created_at.toLocaleString("en-GB", {
          timeZone: "UTC",
          day: "numeric",
          month: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        }),
        updated_at: task.updated_at.toLocaleString("en-GB", {
          timeZone: "UTC",
          day: "numeric",
          month: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        }),
      }));

      return res.json({
        tasks: mappedTasks,
      });
    } catch (error) {
      return res.status(500).send("Internal server error.");
    }
  },
};
