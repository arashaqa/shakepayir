const client = require("../../binance");

async function getAccountInfo(req, res) {
  const accInfo = await client.accountInfo();

  let info = accInfo;

    console.log(info.balances.map(i => {
        if (i.free > 0.00000000) {
          console.log(i.asset)
      }
  }));
}

exports.getAccountInfo = getAccountInfo;

