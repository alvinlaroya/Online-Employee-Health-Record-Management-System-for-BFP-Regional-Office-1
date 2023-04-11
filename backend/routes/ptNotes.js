const router = require("express").Router();
const controller = require("../controllers/ptNotes");

// routes
router.put("/updatePtNotes/:personnelId", controller.updatePtNotes);

module.exports = router;
 