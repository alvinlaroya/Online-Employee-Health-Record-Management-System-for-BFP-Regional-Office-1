require("dotenv").config();
const jwt = require("jsonwebtoken");
const router = require("express").Router();

// controllers
const personnel = require("../controllers/personnel.js");

// routes
router.post("/addPersonnel", personnel.upload, personnel.addPersonnel);
router.get("/getALlPersonnels", personnel.getAllPersonnels)
router.get("/viewDetails/:personnelId", personnel.viewDetails)
router.patch("/updatePersonnel/:personnelId", personnel.updatePersonnel)
router.delete("/deletePersonnel/:personnelId", personnel.deletePersonnel)
router.get("/backupPersonnelsData", personnel.backupPersonnelsData)
router.get("/backupDentalsData", personnel.backupDentalsData)
router.get("/backupMedicalOccupationalHistoryData", personnel.backupMedicalOccupationalHistoryData)
router.get("/backupMedicalFamilyHistoryData", personnel.backupMedicalFamilyHistoryData)
router.get("/backupMedicalPersonalHistoryData", personnel.backupMedicalPersonalHistoryData)
router.get("/backupPhysicalExaminationsData", personnel.backupPhysicalExaminationsData)
router.get("/backupPsychsData", personnel.backupPsychsData)
router.get("/backupPtNotesData", personnel.backupPtNotesData)

/* router.get("/getAllApplicant", middleware, applicant.getAllApplicant);
router.put("/updateApplicant/:id", middleware, applicant.updateApplicant);
 */

function middleware(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.SECRET_JWT_KEY, (err, user) => {
        console.log(err);
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

module.exports = router;
