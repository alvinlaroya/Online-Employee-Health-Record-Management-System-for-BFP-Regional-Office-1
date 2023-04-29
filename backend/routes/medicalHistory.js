const router = require("express").Router();
const familyController = require("../controllers/medicalFamilyHistory.js");
const personnalController = require("../controllers/medicalPersonalHistory.js");
const occupationalController = require("../controllers/medicalOccupationalHistory.js");

// routes
router.put("/updateMedicalFamilyHistory/:personnelId", familyController.updateMedicalFamilyHistory);
router.put("/updateMedicalPersonalHistory/:personnelId", personnalController.updateMedicalPersonalistory);
router.put("/updateMedicalOccupationalHistory/:personnelId", occupationalController.updateMedicalOccupationalHistory);

module.exports = router;
