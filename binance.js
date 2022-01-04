const Binance = require("binance-api-node").default;

const client = Binance({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
});

module.exports = client
