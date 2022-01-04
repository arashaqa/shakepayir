const client = require("../binance");
async function getDailyStats(req, res) {
  const coin = req.params.coin.toUpperCase();
  const stats = await client.futuresDailyStats({ symbol: `${coin}USDT` });
    res.json({
    symbol : `${coin}USDT`,
    data: stats,
  }).status(200);
}

exports.getDailyStats = getDailyStats
