const nodemailer = require("nodemailer");

//use transporter to send an email as transporter.sendMail()
const transporter = nodemailer.createTransport({
  port: 465,
  host: "sandbox.smtp.mailtrap.io",
  auth: {
    user: "d3019e3a57c858",
    pass: "86df68500cff0a",
  },
  secure: true,
});

module.exports = transporter;
