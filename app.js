const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const coinRoutes = require("./routes/coinRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use("/api", coinRoutes);

app.use("/api/order", orderRoutes);


app.listen(process.env.PORT || 3000, () =>
  console.log("Listen On", process.env.PORT || 3000)
);
