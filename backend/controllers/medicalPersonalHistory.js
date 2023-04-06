const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const db = require("../models");

// MODEL
const MedicalPersonalHistory = db.medicalPersonalHistories;

// UPDATE CASE
const updateMedicalPersonalistory = async (req, res) => {
  const data = req.body;

  await MedicalPersonalHistory.update(data, {
    where: {
      personnelId: req.params.personnelId,
    },
  });

  res.sendStatus(200);
};

module.exports = {
  updateMedicalPersonalistory,
};
