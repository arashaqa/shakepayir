const express = require("express");
const router = express.Router();



const priceController = require('../controllers/priceController')
router.get("/:coin", priceController.getPrice);

const candleController = require('../controllers/candleController')
router.get("/:coin/candle", candleController.getCandle);

const orderBookController = require('../controllers/orderBookController')
router.get("/:coin/orderbook", orderBookController.getOrderBook);

const dailyStatsController = require('../controllers/dailyStatsController')
router.get("/:coin/dailystats", dailyStatsController.getDailyStats);

const tradesController = require('../controllers/tradesController')
router.get("/:coin/trades", tradesController.getLastTrades)

const aggregateController = require("../controllers/aggregateController");
router.get("/:coin/aggregate", aggregateController.getLastAggregate);

module.exports = router;
