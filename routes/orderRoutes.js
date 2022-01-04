const express = require("express");
const router = express.Router();
const client = require('../binance');

const accountInfoController = require('../controllers/orderController/accountInfoController')
router.get("/accInfo", accountInfoController.getAccountInfo);




module.exports = router