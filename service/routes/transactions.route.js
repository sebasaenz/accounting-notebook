const express = require('express');
const router = express.Router();

const transactionController = require('../controllers/transaction.controller');

router.get('/', transactionController.accountValue)
router.get('/transactions', transactionController.index);
router.get('/transactions/:id', transactionController.find);
router.post('/transactions', transactionController.create);

module.exports = router;