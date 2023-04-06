const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const db = require("../models");

// MODEL
const MedicalFamilyHistory = db.medicalFamilyHistories;

// UPDATE CASE
const updateMedicalFamilyHistory = async (req, res) => {
  const data = req.body;

  await MedicalFamilyHistory.update(data, {
    where: {
      personnelId: req.params.personnelId,
    },
  });

  res.sendStatus(200);
};

module.exports = {
  updateMedicalFamilyHistory,
};
