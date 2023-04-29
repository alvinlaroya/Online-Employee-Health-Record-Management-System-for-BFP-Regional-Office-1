module.exports = (sequelize, DataTypes) => {
    const medical_occupational_history = sequelize.define("medical_occupational_histories", {
        personnelId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        isRightHanded: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        isLeftHanded: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        isRadioactive: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        isRefuseEmployment: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        refuseEmploymentDetail: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        isSensitiveToChemical: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        isInabilityAssumePosition: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        isOtherMedicalReason: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        isDisqualifiedFromWork: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        disqualifiedWorkDetail: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        numberOfJobsPastThreeYears: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        longestPeriodJob: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        usualOccupation: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        isConsultedByPhysician: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        consultedPhysicianDetail: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        hasSelfMedication: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        selfMedicationDetail: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        hasMentalComplaints: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        mentalComplaintsDetail: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        isAppliedAtBFP: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        isExaminedByMedical: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        dateOfLastExamination: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        neuropsychiatricExam: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        neuropsychiatricExamResult: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });

    return medical_occupational_history;
};
