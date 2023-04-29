module.exports = (sequelize, DataTypes) => {
  const dental = sequelize.define("pt_notes", {
    personnelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    refDoctor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    initialEvaluation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    diagnosis: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hpi: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    medication: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    labExams: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    diagnosticProcedure: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pmh: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    psh: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fda: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subjective: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    objective: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vitalSign: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bloodPressure: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pulseRate: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rr: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    temperature: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ocularInspection: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    palpation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rom: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mmt: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mbm: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lgm: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    findings: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    significance: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    functionalAnalysis: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    assessment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ptImpression: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    problemList: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    shortTermGoal: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ptManagement: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    suggestedPtManagement: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    homeInstruction: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fatherConditionHypertension: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    fatherConditionDiabetes: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    fatherConditionAsthma: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    fatherConditionArthritis: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    fatherConditionCerebalVascular: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    motherConditionHypertension: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    motherConditionDiabetes: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    motherConditionAsthma: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    motherConditionArthritis: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    motherConditionCerebalVascular: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    initialContact: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    loadingResponse: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    midstance: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    terminalStance: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    swingPhase: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    preSwing: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    initialSwing: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    midSwing: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    terminalSwing: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    cadence: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    armSwing: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    strideLength: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    stepWidth: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    balanceToleranceSittingBalance: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    balanceToleranceSittingTolerance: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    balanceToleranceStandingBalance: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    balanceToleranceStandingTolerance: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    adlBathing: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    adlToileting: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    adlEating: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    adlUpperExtermityDressing: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    adlLowerExtermityDressing: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    adlBedMobility: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    adlScootTowardsHeadOfHead: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    adlScootTowardsFootOfHead: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    adlSideToSideScooting: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    adlSupineToLongSitting: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    adlRolling: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    adlTransfers: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    adlWheelChairToMat: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    adlBedToWheelChair: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    adlAmbulation: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    vitalSigns: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    specialTest: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    significance: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    examiningPhysicalTherapist: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    notedBy: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return dental;
};
