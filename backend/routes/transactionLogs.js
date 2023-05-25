require("dotenv").config();
const transactionLogController = require('../controllers/transactionLog')

const router = require('express').Router()

// routes
router.get('/getAllTransactionLogs', transactionLogController.getAllTransactionLogs)
router.post('/createTransactionLog', transactionLogController.createTransactionLog)

module.exports = router
