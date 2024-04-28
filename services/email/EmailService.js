const transporter = require("../../config/email.js");
const ejs = require("ejs");
const path = require("path");

class EmailService {
  constructor(to, subject, view, body) {
    this.to = to;
    this.subject = subject;
    this.view = view;
    this.body = body;
  }

  async sendMail() {
    console.log(__dirname + "../../views/emails/send-assigment-email.ejs");
  }
}

module.exports = EmailService;
