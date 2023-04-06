const router = require("express").Router();
const familyController = require("../controllers/medicalFamilyHistory.js");
const personnalController = require("../controllers/medicalPersonalHistory.js");

// routes
router.put("/updateMedicalFamilyHistory/:personnelId", familyController.updateMedicalFamilyHistory);
router.put("/updateMedicalPersonalHistory/:personnelId", personnalController.updateMedicalPersonalistory);

module.exports = router;
 