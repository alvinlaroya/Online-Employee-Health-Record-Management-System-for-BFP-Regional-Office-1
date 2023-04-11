const dbConfig = require("../config/dbConfig.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user")(sequelize, DataTypes);
db.peronnels = require("./personnel")(sequelize, DataTypes);
db.physicalExaminations = require("./physicalExamination")(sequelize, DataTypes);
db.dentals = require("./dental")(sequelize, DataTypes);
db.psychs = require("./psych")(sequelize, DataTypes);
db.medicalFamilyHistories = require("./medicalFamilyHistory")(sequelize, DataTypes);
db.medicalPersonalHistories = require("./medicalPersonalHistory")(sequelize, DataTypes);
db.ptNotes = require("./ptNotes.js")(sequelize, DataTypes);
/* db.clearances = require("./clearance")(sequelize, DataTypes);
db.cases = require("./case")(sequelize, DataTypes);
db.applicants = require("./applicant")(sequelize, DataTypes);
db.chiefOfPolice = require("./chiefOfPolice")(sequelize, DataTypes); */

db.sequelize.sync({ force: false }).then(() => {
  console.log("re-sync done");
});

module.exports = db;
