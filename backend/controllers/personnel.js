const { Sequelize } = require("sequelize");
require("dotenv").config();
var moment = require("moment"); // require
moment().format();
const Op = Sequelize.Op;
const db = require("../models");

// multer
const multer = require("multer");
const path = require("path");

// MODEL
const Personnel = db.peronnels;
const PhysicalExamination = db.physicalExaminations;
const Dental = db.dentals;
const Psych = db.psychs;

// UPLOAD
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimType && extname) return cb(null, true);
    cb("Dive proper file format to upload");
  },
}).fields([{ name: "personnelImage", maxCount: 1 }]);

// CREATE CLEARANCE
const addPersonnel = async (req, res) => {
  console.log("REQ", req.files["personnelImage"][0].path);
  console.log("REQ 2", req.files.personnelImage[0].path);
  const {
    accountNo,
    rank,
    lname,
    fname,
    mname,
    extName,
    unit,
    designation,
    mobile,
    civilStatus,
    gender,
    philhealth,
    remarks,
    dateOfBirth,
    address,
  } = req.body;

  const param = {
    accountNo,
    rank,
    lname,
    fname,
    mname,
    extName,
    unit,
    designation,
    mobile,
    civilStatus,
    gender,
    philhealth,
    remarks,
    dateOfBirth,
    address,
    personnelImage: req.files["personnelImage"][0].path,
  };

  const personnel = await Personnel.create(param);
  await PhysicalExamination.create({
    personnelId: personnel.id,
  });
  await Dental.create({
    personnelId: personnel.id,
  });
  await Psych.create({
    personnelId: personnel.id,
  });

  res.status(200).json({
    message: "success",
    personnel: personnel
  });
};

const getAllPersonnels = async (req, res) => {
  let personnels = await Personnel.findAndCountAll({
    order: [["createdAt", "DESC"]],
  });
  res.status(200).json({
    message: "success",
    personnels: personnels,
  });
};

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
  upload,
  addPersonnel,
  getAllPersonnels,
  /*     getAllApplicant,
        updateApplicant, */
};
