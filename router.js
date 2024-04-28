const express = require("express");
const router = express.Router();
const PersonnelController = require("./controllers/PersonnelController.js");

router.get("/personnel/call/:service_type/:room_id", PersonnelController.call);
router.get("/claim-task", PersonnelController.claim);

module.exports = router;
