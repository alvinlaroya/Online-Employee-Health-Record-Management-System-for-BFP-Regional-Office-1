const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const db = require("../models");

// MODEL
const Psych = db.psychs;

// UPDATE CASE
const updatePsych = async (req, res) => {
  const data = req.body;

  await Psych.update(data, {
    where: {
      personnelId: req.params.personnelId,
    },
  });

  res.sendStatus(200);
};

module.exports = {
  updatePsych,
};
