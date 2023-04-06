module.exports = (sequelize, DataTypes) => {
    const medical_personal_history = sequelize.define("medical_personal_histories", {
      personnelId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      haveBeenPregnant: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      numberOfTimesPregnant: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      numberOfChildren: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      hadAbortion: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      numberOfAbortion: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      wornEyeglasses: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      wornHearingAid: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      syphillis: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      fracture: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      suicide: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      footTrouble: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      diphtheria: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      rheumaticFever: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      measles: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      mumps: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      chickenPox: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      whoopingCough: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      tuberculosis: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      pneumonia: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      asthma: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      jaundice: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      earDischarge: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      goiter: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      epilepsy: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      veneralDisease: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      knockedKnee: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      depression: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      pyorrhea: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      arthritis: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      lossOfMemory: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      nervousness: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      sinusitis: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      bedWetting: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      wornBrace: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      wornArtificialEyes: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      paralysis: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      serumReaction: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      liveWithTuberculosis: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      stuttered: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      gallBladder: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      severeHeadache: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      dizziness: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      chronic: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      palpitation: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      cyst: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      painfulUrination: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      albuminUrine: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      weightLoss: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      jointDeformity: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      lossOfArm: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      painInShoulder: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      motionSickness: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      shortnessOfBreath: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      liverDisorder: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      terrifyingNightmare: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      sleepingTrouble: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      alcoholism: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      painInTheChest: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      severeIndigestion: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      rectalDisease: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      diarrhea: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      }
    });
  
    return medical_personal_history;
  };
  