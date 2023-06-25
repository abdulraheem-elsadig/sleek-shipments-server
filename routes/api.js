const express = require("express");
const authRouter = require("./auth.router");
const vehiclesRouter = require("./vehicles.router");
const workersRouter = require("./workers.router");

const api = express.Router();

api.use("/auth", authRouter);
api.use("/vehicles", vehiclesRouter);
api.use("/workers", workersRouter);

module.exports = api;
