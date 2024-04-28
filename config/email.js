const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "mustafaguner235@gmail.com",
    pass: "",
  },
});

module.exports = transporter;
