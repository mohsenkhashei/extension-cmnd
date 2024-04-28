const EmailService = require("./EmailService");

class SendAssignmentEmail extends EmailService {
  constructor(to, body) {
    super(
      to,
      "Send Assignment Email",
      "views/emails/send-assignment-email.ejs",
      body
    );
  }
}

module.exports = SendAssignmentEmail;
