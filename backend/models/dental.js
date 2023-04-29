module.exports = (sequelize, DataTypes) => {
  const dental = sequelize.define("dentals", {
    personnelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    initial: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    initialDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    training: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    trainingDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    promotion: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    promotionDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    calculus: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    remarks: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    presentOralComplaint: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    diabetes: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    bleeding: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    drugSensitivity: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    historyOfHypertension: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    asthma: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    foodAllergy: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    systolicBP: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    diastolicBP: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    examiningDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    examiningDentist: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    oralComplaint: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return dental;
};
