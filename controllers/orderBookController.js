const client = require("../binance");

async function getOrderBook(req, res, next) {
  let coin = req.params.coin.toUpperCase();
  const orderBook = await client.futuresBook({ symbol: `${coin}USDT` });
  res.json({
    symbol: `${coin}USDT`,
    data: orderBook,
  }).status(200);
}

exports.getOrderBook = getOrderBook;
