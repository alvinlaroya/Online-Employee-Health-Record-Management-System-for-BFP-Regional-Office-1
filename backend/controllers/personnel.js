const { Sequelize } = require("sequelize");
require("dotenv").config();
var moment = require("moment"); // require
moment().format();
const Op = Sequelize.Op;
const db = require("../models");

var bodyParser = require('body-parser');
var Json2csvParser = require('json2csv').Parser;
const fs = require('fs');

// multer
const multer = require("multer");
const path = require("path");

// MODEL
const Personnel = db.peronnels;
const PhysicalExamination = db.physicalExaminations;
const Dental = db.dentals;
const Psych = db.psychs;
const MedicalFamilyHistory = db.medicalFamilyHistories;
const MedicalPersonalHistory = db.medicalPersonalHistories;
const MedicalOccupationalHistory = db.medicalOccupationalHistories;
const PtNotes = db.ptNotes;

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
    placeOfBirth,
    occupation
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
    placeOfBirth,
    occupation,
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
  await MedicalFamilyHistory.create({
    personnelId: personnel.id,
  });
  await MedicalPersonalHistory.create({
    personnelId: personnel.id,
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
  });
  await MedicalOccupationalHistory.create({
    personnelId: personnel.id,
  });
  await PtNotes.create({
    personnelId: personnel.id,
  });

  res.status(200).json({
    message: "success",
    personnel: personnel,
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

const viewDetails = async (req, res) => {
  const personnelId = req.params.personnelId;

  let personnel = await Personnel.findOne({
    where: {
      id: personnelId, // user email
    },
  });
  let physicalExamination = await PhysicalExamination.findOne({
    where: {
      personnelId: personnelId, // user email
    },
  });
  let dental = await Dental.findOne({
    where: {
      personnelId: personnelId, // user email
    },
  });
  let neuroPsych = await Psych.findOne({
    where: {
      personnelId: personnelId, // user email
    },
  });
  let medicalFamilyHistory = await MedicalFamilyHistory.findOne({
    where: {
      personnelId: personnelId, // user email
    },
  });
  let medicalPersonalHistory = await MedicalPersonalHistory.findOne({
    where: {
      personnelId: personnelId, // user email
    },
  });
  let medicalOccupationalHistory = await MedicalOccupationalHistory.findOne({
    where: {
      personnelId: personnelId, // user email
    },
  });
  let ptNotes = await PtNotes.findOne({
    where: {
      personnelId: personnelId, // user email
    },
  });

  res.status(200).json({
    message: "success",
    data: {
      personnel,
      physicalExamination,
      dental,
      neuroPsych,
      medicalRecord: {
        medicalFamilyHistory,
        medicalPersonalHistory,
        medicalOccupationalHistory,
      },
      ptNotes
    }
  });
};


const updatePersonnel = async (req, res) => {
  const persoonelData = req.body;

  await Personnel.update(persoonelData, {
    where: {
      id: req.params.personnelId
    }
  });

  console.log("update", persoonelData)

  await MedicalPersonalHistory.update({
    accountNo: persoonelData.accountNo,
    rank: persoonelData.rank,
    lname: persoonelData.lname,
    fname: persoonelData.fname,
    mname: persoonelData.mname,
    extName: persoonelData.extName,
    unit: persoonelData.unit,
    designation: persoonelData.designation,
    mobile: persoonelData.mobile,
    civilStatus: persoonelData.civilStatus,
    gender: persoonelData.gender
  }, {
    where: {
      personnelId: req.params.personnelId
    }
  })

  res.sendStatus(200);
}

const deletePersonnel = async (req, res) => {
  await Personnel.destroy({
    where: {
      id: req.params.personnelId
    }
  })

  res.sendStatus(200);
}

const backupPersonnelsData = async (req, res) => {
  let personnels = await Personnel.findAndCountAll({
    order: [["createdAt", "DESC"]],
  });

  const jsonPersonnelsData = JSON.parse(JSON.stringify(personnels.rows));

  // -> Convert JSON to CSV data
  const json2csvParser = new Json2csvParser();
  const csv = json2csvParser.parse(jsonPersonnelsData);


  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", "attachment; filename=personnels.csv");

  res.status(200).end(csv);
}

const backupDentalsData = async (req, res) => {
  let data = await Dental.findAndCountAll({
    order: [["createdAt", "DESC"]],
  });

  const jsonPersonnelsData = JSON.parse(JSON.stringify(data.rows));

  // -> Convert JSON to CSV data
  const json2csvParser = new Json2csvParser();
  const csv = json2csvParser.parse(jsonPersonnelsData);


  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", "attachment; filename=dentals.csv");

  res.status(200).end(csv);
}

const backupMedicalFamilyHistoryData = async (req, res) => {
  let data = await Dental.findAndCountAll({
    order: [["createdAt", "DESC"]],
  });

  const jsonData = JSON.parse(JSON.stringify(data.rows));

  // -> Convert JSON to CSV data
  const json2csvParser = new Json2csvParser();
  const csv = json2csvParser.parse(jsonData);


  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", "attachment; filename=medical_family_history.csv");

  res.status(200).end(csv);
}

const backupMedicalOccupationalHistoryData = async (req, res) => {
  let data = await Dental.findAndCountAll({
    order: [["createdAt", "DESC"]],
  });

  const jsonData = JSON.parse(JSON.stringify(data.rows));

  // -> Convert JSON to CSV data
  const json2csvParser = new Json2csvParser();
  const csv = json2csvParser.parse(jsonData);


  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", "attachment; filename=medical_occupational_history.csv");

  res.status(200).end(csv);
}

const backupMedicalPersonalHistoryData = async (req, res) => {
  let data = await Dental.findAndCountAll({
    order: [["createdAt", "DESC"]],
  });

  const jsonData = JSON.parse(JSON.stringify(data.rows));

  // -> Convert JSON to CSV data
  const json2csvParser = new Json2csvParser();
  const csv = json2csvParser.parse(jsonData);


  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", "attachment; filename=medical_personal_history.csv");

  res.status(200).end(csv);
}

const backupPhysicalExaminationsData = async (req, res) => {
  let data = await Dental.findAndCountAll({
    order: [["createdAt", "DESC"]],
  });

  const jsonData = JSON.parse(JSON.stringify(data.rows));

  // -> Convert JSON to CSV data
  const json2csvParser = new Json2csvParser();
  const csv = json2csvParser.parse(jsonData);


  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", "attachment; filename=physical_examinations.csv");

  res.status(200).end(csv);
}

const backupPsychsData = async (req, res) => {
  let data = await Psych.findAndCountAll({
    order: [["createdAt", "DESC"]],
  });

  const jsonData = JSON.parse(JSON.stringify(data.rows));

  // -> Convert JSON to CSV data
  const json2csvParser = new Json2csvParser();
  const csv = json2csvParser.parse(jsonData);


  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", "attachment; filename=psyches.csv");

  res.status(200).end(csv);
}


const backupPtNotesData = async (req, res) => {
  let data = await PtNotes.findAndCountAll({
    order: [["createdAt", "DESC"]],
  });

  const jsonData = JSON.parse(JSON.stringify(data.rows));

  // -> Convert JSON to CSV data
  const json2csvParser = new Json2csvParser();
  const csv = json2csvParser.parse(jsonData);


  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", "attachment; filename=pt_notes.csv");

  res.status(200).end(csv);
}

module.exports = {
  upload,
  addPersonnel,
  getAllPersonnels,
  viewDetails,
  updatePersonnel,
  deletePersonnel,
  backupPersonnelsData,
  backupDentalsData,
  backupMedicalFamilyHistoryData,
  backupMedicalOccupationalHistoryData,
  backupMedicalPersonalHistoryData,
  backupPhysicalExaminationsData,
  backupPsychsData,
  backupPtNotesData
};
