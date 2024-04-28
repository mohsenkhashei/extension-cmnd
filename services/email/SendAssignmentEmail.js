const EmailService = require("./EmailService");
const path = require("path");

class SendAssignmentEmail extends EmailService {
  constructor(options = {}) {
    super(options);
    this.options = {};
    this.options.view = path.join(
      __dirname,
      "views/emails/send-assignment-email.ejs"
    );
    this.options.subject = "Send Assignment Email";
  }
}

module.exports = SendAssignmentEmail;
