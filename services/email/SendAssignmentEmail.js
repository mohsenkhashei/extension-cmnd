const EmailService = require("./EmailService");
const path = require("path");

class SendAssignmentEmail extends EmailService {
  constructor(options = {}) {
    super(options);
    this.options = {}; // Initialize options object
    this.options.view = path.join(
      __dirname,
      "views/emails/send-assignment-email.ejs"
    ); // Assign view path
    this.options.subject = "Send Assignment Email"; // Assign subject
  }
}

module.exports = SendAssignmentEmail;
