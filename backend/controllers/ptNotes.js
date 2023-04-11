const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const db = require("../models");

// MODEL
const PtNotes = db.ptNotes;

// UPDATE CASE
const updatePtNotes = async (req, res) => {
  const data = req.body;

  await PtNotes.update(data, {
    where: {
      personnelId: req.params.personnelId,
    },
  });

  res.sendStatus(200);
};

module.exports = {
    updatePtNotes,
};
