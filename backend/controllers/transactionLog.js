const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const db = require("../models");

// MODEL
const TranssactionLog = db.transactionLogs;

const getAllTransactionLogs = async (req, res) => {
    let logs = await TranssactionLog.findAndCountAll({
        order: [["createdAt", "DESC"]],
    });


    res.header("Access-Control-Allow-Origin", "*");
    res.json({
        message: "success",
        data: logs
    });
}

const createTransactionLog = async (req, res) => {
    const { name, log } = req.body;
    const transaction = await TranssactionLog.create({
        name: name,
        log: log
    });


    res.status(200);
    res.json({
        message: "success",
        data: {
            log: transaction
        }
    });
}

module.exports = {
    getAllTransactionLogs,
    createTransactionLog
};
