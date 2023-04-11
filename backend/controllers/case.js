const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const db = require("../models");

// MODEL
const MedicalPersonalHistory = db.medicalPersonalHistories;

const getAllCases = async (req, res) => {
  let arthritis = await MedicalPersonalHistory.count({
    where: {
      arthritis: true,
    },
  });

  let asthma = await MedicalPersonalHistory.count({
    where: {
      asthma: true,
    },
  });

  let chickenPox = await MedicalPersonalHistory.count({
    where: {
      chickenPox: true,
    },
  });

  let cyst = await MedicalPersonalHistory.count({
    where: {
      cyst: true,
    },
  });

  let epilepsy = await MedicalPersonalHistory.count({
    where: {
      epilepsy: true,
    },
  });

  let gallBladder = await MedicalPersonalHistory.count({
    where: {
      gallBladder: true,
    },
  });

  let goiter = await MedicalPersonalHistory.count({
    where: {
      goiter: true,
    },
  });

  let measles = await MedicalPersonalHistory.count({
    where: {
      measles: true,
    },
  });

  let mumps = await MedicalPersonalHistory.count({
    where: {
      mumps: true,
    },
  });

  let pneumonia = await MedicalPersonalHistory.count({
    where: {
      pneumonia: true,
    },
  });

  let tuberculosis = await MedicalPersonalHistory.count({
    where: {
      tuberculosis: true,
    },
  });

  let sinusitis = await MedicalPersonalHistory.count({
    where: {
      sinusitis: true,
    },
  });

  let depression = await MedicalPersonalHistory.count({
    where: {
      depression: true,
    },
  });

  let diphtheria = await MedicalPersonalHistory.count({
    where: {
      diphtheria: true,
    },
  });

  let whoopingCough = await MedicalPersonalHistory.count({
    where: {
      whoopingCough: true,
    },
  });


  res.header("Access-Control-Allow-Origin", "*");
  res.json({
    message: "success",
    data: [
      { title: 'Arthritis', total: arthritis },
      { title: 'Asthma', total: asthma },
      { title: 'Chicken Pox', total: chickenPox },
      { title: 'Cyst or Tumor', total: cyst },
      { title: 'Epilepsy', total: epilepsy },
      { title: 'Gall Stone', total: gallBladder },
      { title: 'Goiter', total: goiter },
      { title: 'Measles', total: measles },
      { title: 'Mumps', total: mumps },
      { title: 'Pneumonia', total: pneumonia },
      { title: 'Tuberculosis', total: tuberculosis },
      { title: 'Sinusitis', total: sinusitis },
      { title: 'Depression', total: depression },
      { title: 'Diphtheria', total: diphtheria },
      { title: 'Whooping Cough', total: whoopingCough },
    ],
  });

}

const getAllPersonnelsByCase = async (req, res) => {
  const caseParam = req.params.case

  let personnels = []

  switch (caseParam) {
    case "Arthritis":
      personnels = await MedicalPersonalHistory.findAndCountAll({
        where: {
          arthritis: true,
        },
      });
      break;
    case "Asthma":
      personnels = await MedicalPersonalHistory.findAndCountAll({
        where: {
          asthma: true,
        },
      });
      break;
    case "Chicken Pox":
      personnels = await MedicalPersonalHistory.findAndCountAll({
        where: {
          chickenPox: true,
        },
      });
      break;
    case "Cyst or Tumor":
      personnels = await MedicalPersonalHistory.findAndCountAll({
        where: {
          cyst: true,
        },
      });
      break;
    case "Epilepsy":
      personnels = await MedicalPersonalHistory.findAndCountAll({
        where: {
          epilepsy: true,
        },
      });
      break;
    case "Gall Stone":
      personnels = await MedicalPersonalHistory.findAndCountAll({
        where: {
          gallBladder: true,
        },
      });
      break;
    case "Goiter":
      personnels = await MedicalPersonalHistory.findAndCountAll({
        where: {
          goiter: true,
        },
      });
      break;
    case "Measles":
      personnels = await MedicalPersonalHistory.findAndCountAll({
        where: {
          measles: true,
        },
      });
      break;
    case "Mumps":
      personnels = await MedicalPersonalHistory.findAndCountAll({
        where: {
          mumps: true,
        },
      });
      break;
    case "Pneumonia":
      personnels = await MedicalPersonalHistory.findAndCountAll({
        where: {
          pneumonia: true,
        },
      });
      break;
    case "Tuberculosis":
      personnels = await MedicalPersonalHistory.findAndCountAll({
        where: {
          tuberculosis: true,
        },
      });
      break;
    case "Sinusitis":
      personnels = await MedicalPersonalHistory.findAndCountAll({
        where: {
          sinusitis: true,
        },
      });
      break;
    case "Depression":
      personnels = await MedicalPersonalHistory.findAndCountAll({
        where: {
          depression: true,
        },
      });
      break;
    case "Diphtheria":
      personnels = await MedicalPersonalHistory.findAndCountAll({
        where: {
          diphtheria: true,
        },
      });
      break;
    case "Whooping Cough":
      personnels = await MedicalPersonalHistory.findAndCountAll({
        where: {
          whoopingCough: true,
        },
      });
      break;
    default :
      personnels = await MedicalPersonalHistory.findAndCountAll();
      break;
  }

  res.header("Access-Control-Allow-Origin", "*");
  res.json({
    message: "success",
    data: personnels
  });

}

module.exports = {
  getAllCases,
  getAllPersonnelsByCase
};
