module.exports = (sequelize, DataTypes) => {
    const brother = sequelize.define("brothers", {
      personnelId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      brotherName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      brotherAge: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      brotherStateOfHealth: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      brotherCauseOfDeath: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
  
    return brother ;
  };
  