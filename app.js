const cors = require("cors");
const express = require("express");

const app = express();
app.use(
  cors({
    origin: "https://localhost:3000",
  })
);

app.use(express.json());

module.exports = app;
