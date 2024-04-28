const transporter = require("../../config/email.js");
const ejs = require("ejs");
const path = require("path");

class EmailService {
  constructor(options) {
    const { to, subject, view, body } = options;
    this.to = to;
    this.subject = subject;
    this.view = view;
    this.body = body;
  }

  async sendMail() {
    const htmlContent = await ejs.renderFile(
      path.join(__dirname, this.view),
      this.body
    );

    await transporter.sendMail({
      to: this.to,
      subject: this.subject,
      html: htmlContent,
    });
  }
}

module.exports = EmailService;
