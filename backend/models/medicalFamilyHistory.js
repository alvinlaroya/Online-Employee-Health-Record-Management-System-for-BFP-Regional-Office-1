module.exports = (sequelize, DataTypes) => {
    const medical_family_history = sequelize.define("medical_family_histories", {
      personnelId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fatherName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fatherAge: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      fatherStateOfHealth: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fatherCauseOfDeath: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      motherName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      motherAge: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      motherStateOfHealth: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      motherCauseOfDeath: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      brother1Name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      brother1Age: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      brother1StateOfHealth: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      brother1CauseOfDeath: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      brother2Name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      brother2Age: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      brother2StateOfHealth: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      brother2CauseOfDeath: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      sister1Name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      sister1Age: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      sister1StateOfHealth: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      sister1CauseOfDeath: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      sister2Name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      sister2Age: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      sister2StateOfHealth: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      sister2CauseOfDeath: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      children1Name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      children1Age: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      children1StateOfHealth: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      children1CauseOfDeath: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      children2Name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      children2Age: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      children2StateOfHealth: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      children2CauseOfDeath: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      spouseName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      spouseAge: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      spouseStateOfHealth: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      spouseCauseOfDeath: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      syphillis: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      cancer: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      epilepsy: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      kidney: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      kidneyTrouble: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      asthma: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      allergy: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      psychiatric: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      committedSuicide: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      hypertension: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      diabetes: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    });
  
    return medical_family_history ;
  };
  