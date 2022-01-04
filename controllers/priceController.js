const client = require("../binance");

async function getPrice(req, res, next) {
  let coin = req.params.coin.toLocaleUpperCase();
  const price = await client.prices({ symbol: `${coin}USDT` });
  res
    .json({
      symbol: `${coin}USDT`,
      data: price,
    })
    .status(200);
  console.group(price);
}

exports.getPrice = getPrice;
