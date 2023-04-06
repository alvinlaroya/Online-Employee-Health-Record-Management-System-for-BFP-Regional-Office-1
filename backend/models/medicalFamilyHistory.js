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
  