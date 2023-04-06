const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const db = require("../models");

// MODEL
const Dental = db.dentals;

// UPDATE CASE
const updateDental = async (req, res) => {
  const data = req.body;

  await Dental.update(data, {
    where: {
      personnelId: req.params.personnelId,
    },
  });

  res.sendStatus(200);
};

module.exports = {
  updateDental,
};
