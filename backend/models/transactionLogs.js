module.exports = (sequelize, DataTypes) => {
    const TranssactionLog = sequelize.define("transaction_logs", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        log: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return TranssactionLog;
};
