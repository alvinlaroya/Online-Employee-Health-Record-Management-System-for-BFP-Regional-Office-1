const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const db = require("../models");

// MODEL
const PhysicalExamination = db.physicalExaminations;

// UPDATE CASE
const updatePhysicalExamination = async (req, res) => {
  const data = req.body;

  await PhysicalExamination.update(data, {
    where: {
      personnelId: req.params.personnelId,
    },
  });

  res.sendStatus(200);
};

module.exports = {
  updatePhysicalExamination,
};
