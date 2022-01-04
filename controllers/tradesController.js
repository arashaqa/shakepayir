const client = require("../binance");

async function getLastTrades(req, res) {
    const coin = req.params.coin.toUpperCase();
    const query = req.query
    console.log(query)
    const trades = await client.futuresTrades({
        symbol: `${coin}USDT`,
        limit: req.query.limit
    })
    res.json({data: trades}).status(200)
}
exports.getLastTrades = getLastTrades
