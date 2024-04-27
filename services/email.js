const nodemailer = require('nodemailer');

//use transporter to send an email as transporter.sendMail()
const transporter = nodemailer.createTransport({
    port: process.env.MAIL_PORT,             
    host: process.env.MAIL_HOST,
       auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
         },
    secure: process.env.NODE_ENV === 'development' ? false : true,
    });

module.exports = transporter;