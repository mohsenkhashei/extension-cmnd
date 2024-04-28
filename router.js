const express = require("express");
const router = express.Router();

//Controllers
const PersonnelController = require("./controllers/PersonnelController.js");
const TaskController = require("./controllers/TaskController.js");

router.get("/personnel/call/:service_type/:room_id", PersonnelController.call);
router.get("/claim-task", TaskController.claim);

module.exports = router;
