const ServiceType = require('../schemas/service_type');
const Personnel = require("../schemas/personnel.js");
const transporter = require("../services/email.js");
const { Sequelize } = require('sequelize');

module.exports = {
  call: async function(req, res, next) {
    let { service_type, room_id } = req.params;

    try {
    
      const serviceType = await ServiceType.findOne({ where: { title: { [Sequelize.Op.like]: `%${service_type}%` } } });
        if (!serviceType) throw new Error('Service type not found');

        const targetPersonnelGroup = await Personnel.findAll({
          include: [{
              model: ServiceType,
              where: { id: serviceType.id }
          }]
      });

        const message = await Message.findOne({ where: { service_type_id: serviceType.id } });
        if (!message) throw new Error('Message not found for this service type');

        const newTask = await Task.create({
          token: generateUniqueToken(), 
          room_id: roomId,
          service_type_id: serviceTypeModel.id,
          personnel_id: personnelModel.id
        });

      const emailContent = `
      <p>Hello,</p>
      <p>There is a new task:</p>
      <ul>
        <li>Room ID: ${room_id}</li>
        <li>Service Type: ${serviceTypeModel.title}</li>
        <li>Task Token: ${newTask.token}</li>
      </ul>
      <p>Please click on the following link to claim the task:</p>
      <p><a href="http://localhost:8001/claim-task?token=${newTask.token}">Claim Task</a></p>
      <p>If the above link does not work, you can copy and paste the following URL into your browser:</p>
      <p>http://localhost:8001/claim-task?token=${newTask.token}</p>`;
    
    
      targetPersonnelGroup.map(async (personnel) => {
        await transporter.sendMail({
          to: personnel.email,
          subject: 'New Task Assignment',
          html: emailContent
        });
      });
      
    return res.json({
      success: true,
      message: "Task created and emails sent successfully."
    });

    } catch (error) {
      console.error('An error occurred:', error);
      return res.status(500).json({
        success: false,
        message: "Internal server error."
      });
    }
  },
  test: function(req, res, next) {
    return res.json({
      success: true,
      message: "what the"
    });
  }
};
