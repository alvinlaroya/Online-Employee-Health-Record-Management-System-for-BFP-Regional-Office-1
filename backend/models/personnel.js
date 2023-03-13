module.exports = (sequelize, DataTypes) => {
    const ChiefOfPolice = sequelize.define("personnels", {
        accountNo: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        rank: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        fname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        extName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        dateOfBirth: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        civilStatus: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        philhealth: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        mobile: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        unit: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        designation: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        remarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });

    return ChiefOfPolice;
};
