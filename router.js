const express = require("express");
const router = express.Router();
const CmndToolsController = require("./controllers/CmndToolController.js");


router.get("/tools", CmndToolsController.getTools);
router.post("/run", CmndToolsController.runToolByName);


module.exports = router;
