const express = require("express");
const router = express.Router();
const PersonnelController = require("./controllers/PersonnelController.js");

router.get("/tools", PersonnelController.call);


module.exports = router;
