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
};