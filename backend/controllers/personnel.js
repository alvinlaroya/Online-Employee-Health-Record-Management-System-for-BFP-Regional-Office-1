const { Sequelize } = require("sequelize");
require("dotenv").config();
var moment = require("moment"); // require
moment().format();
const Op = Sequelize.Op;
const db = require("../models");
// MODEL
const Personnel = db.peronnels;

// CREATE CLEARANCE
const addPersonnel = async (req, res) => {
    const personnel = await Personnel.create(req.body);
    res.status(200).json({
        message: "success",
        personnel: personnel,
    });
};

const getAllPersonnels = async (req, res) => {
    let personnels = await Personnel.findAndCountAll({
        order: [["createdAt", "DESC"]],
    });

    res.header("Access-Control-Allow-Origin", "*");
    res.json({
        message: "success",
        personnels: personnels,
    });
}

// READ APPLICANT

/* const getAllApplicant = async (req, res) => {
    let applicants = await Applicant.findAndCountAll({
        order: [["createdAt", "DESC"]],
    });

    res.header("Access-Control-Allow-Origin", "*");
    res.json({
        message: "success",
        applicants: applicants,
    });
}; */

// UPDATE APPLICANT
/* const updateApplicant = async (req, res) => {
    const applicant = req.body;

    await Applicant.update(applicant, {
        where: {
            id: req.params.id,
        },
    });

    res.sendStatus(200);
};
 */
module.exports = {
    addPersonnel,
    getAllPersonnels
    /*     getAllApplicant,
        updateApplicant, */
};
