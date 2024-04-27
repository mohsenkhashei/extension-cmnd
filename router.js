const express = require("express");
const router = express.Router();
const PersonnelController = require("./controllers/PersonnelController.js");
const transporter = require("./services/email.js")

router.get("/tools", PersonnelController.call);

//Email Test Endpoint
router.post("/email-test",function(req, res, next) {

    const {to,subject,text} = req.body;

    const mailData = {
        from: 'youremail@gmail.com',  
          to: to,  
          subject: subject,
          text:text,
          html: `<b>Hey there! </b>`,
        };

        transporter.sendMail(mailData, function (err, info) {
            if(err)
              console.log(err)
            else
              console.log(info);
         });
         
         res.end();
});


module.exports = router;
