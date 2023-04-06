module.exports = (sequelize, DataTypes) => {
  const PhysicalExamination = sequelize.define("physical_examinations", {
    personnelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    placeOfBirth: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dateOfExamination: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    purposeOfExamination: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    purposeOfExamination: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    build: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    skin: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    colorOfEyes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    colorOfHair: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    headAndFace: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    neck: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    noseAndSinuses: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mouthAndThroat: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    earsAndEardrums: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    whisperVoiceTest: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    eyesOrPupils: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vision: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    colorVision: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    heart: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vascularSystem: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lungsAndChest: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    abdomenViscera: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    anusAndRectum: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    genital: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    upperExtremities: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lowerExtremities: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    spineAndMskSystem: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pelvic: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    psychiatric: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bloodPressure: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cardiacRate: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    drugTest: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    urinalysis: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fbs: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hepaScreening: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cbc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bloodType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pregnancyTest: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cholesterol: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ecg: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    chestXray: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    significantMedicalHistory: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    overallPhysicalEvaluation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    recommendation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return PhysicalExamination;
};
