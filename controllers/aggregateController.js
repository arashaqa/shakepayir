const client = require("../binance");

async function getLastAggregate(req, res) {
  const coin = req.params.coin.toUpperCase();
  const query = req.query;
  console.log(query);
  const aggregate = await client.futuresAggTrades({ symbol:`${coin}USDT` , startTime:req.query.start , endTime:req.query.end})
  res.json({ data: aggregate }).status(200);
}
exports.getLastAggregate = getLastAggregate;
