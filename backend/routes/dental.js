const router = require("express").Router();
const controller = require("../controllers/dental.js");

// routes
router.put("/updateDental/:personnelId", controller.updateDental);

module.exports = router;
