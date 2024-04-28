const express = require("express");
const router = express.Router();
const PersonnelController = require("./controllers/PersonnelController.js");
const ServiceTypeController = require("./controllers/ServiceTypeController.js");

router.get("/personnel/call/:service_type/:room_id", PersonnelController.call);
router.get("/claim-task", PersonnelController.claim);
router.get("/service-types", ServiceTypeController.index);

module.exports = router;
