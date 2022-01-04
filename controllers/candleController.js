const client = require("../binance");
async function getCandle(req, res, next) {
  let coin = req.params.coin.toLocaleUpperCase();
  console.log(coin);
  const candleData = await client.candles({
    symbol: `${coin}USDT`,
    interval: `${req.query.interval}`,
  });
  res.json({
    symbol: `${coin}USDT`,
    data: candleData,
  }.status(200));
  console.log(candleData);
}

exports.getCandle = getCandle;
