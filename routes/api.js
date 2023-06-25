const express = require("express");
const authRouter = require("./auth.router");
const vehiclesRouter = require("./vehicles.router");

const api = express.Router();

api.use("/auth", authRouter);
api.use("/vehicles", vehiclesRouter);

module.exports = api;
