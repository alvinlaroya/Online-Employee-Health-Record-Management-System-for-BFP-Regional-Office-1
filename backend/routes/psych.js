const router = require("express").Router();
const controller = require("../controllers/psych");

// routes
router.put("/updatePsych/:personnelId", controller.updatePsych);

module.exports = router;
 