const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const db = require("../models");

// MODEL
const MedicalOccupationalHistory = db.medicalOccupationalHistories;

// UPDATE CASE
const updateMedicalOccupationalHistory = async (req, res) => {
    const data = req.body;

    await MedicalOccupationalHistory.update(data, {
        where: {
            personnelId: req.params.personnelId,
        },
    });

    res.sendStatus(200);
};

module.exports = {
    updateMedicalOccupationalHistory,
};
