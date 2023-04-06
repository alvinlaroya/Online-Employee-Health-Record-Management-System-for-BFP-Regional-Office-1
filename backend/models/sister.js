module.exports = (sequelize, DataTypes) => {
    const sister = sequelize.define("sisters", {
      personnelId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sisterName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      sisterAge: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      sisterStateOfHealth: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      sisterCauseOfDeath: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
  
    return sister ;
  };
  