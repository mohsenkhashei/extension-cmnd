const express = require("express");
const router = express.Router();
const PersonnelController = require("./controllers/PersonnelController.js");

router.get("/personnel/call/:service_type/:room_id", PersonnelController.call);
router.get("/personnel/test", PersonnelController.test);


module.exports = router;
