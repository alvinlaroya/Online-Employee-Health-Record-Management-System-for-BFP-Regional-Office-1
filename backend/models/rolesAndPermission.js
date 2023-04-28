module.exports = (sequelize, DataTypes) => {
    const roles_and_permission = sequelize.define("roles_and_permission", {
        personnelId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        viewMedical: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        updateMedical: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        viewPtNotes: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        updatePtNotes: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        viewDental: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        updateDental: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        viewPhysical: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        updatePhysical: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        viewNeuro: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        updateNeuro: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        }
    });

    return roles_and_permission;
};
