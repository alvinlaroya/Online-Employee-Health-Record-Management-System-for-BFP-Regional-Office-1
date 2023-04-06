module.exports = (sequelize, DataTypes) => {
    const dental = sequelize.define("psych", {
      personnelId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      currentHealthCondition: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      historyOfMentalHealthCondition: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      currentMentalHealthCondition: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
  
    return dental;
  };
  