const router = require("express").Router();
const controller = require("../controllers/physicalExamination.js");

// routes
router.put("/updatePhysicalExamination/:personnelId", controller.updatePhysicalExamination);

module.exports = router;
