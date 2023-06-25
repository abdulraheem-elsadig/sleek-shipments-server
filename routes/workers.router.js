const express = require("express");
const {
  getWorkers,
  createWorker,
  updateWorker,
  deleteWorker,
} = require("../controllers/worker.controller");

const workersRouter = express.Router();

workersRouter.post("/", createWorker);
workersRouter.get("/", getWorkers);
workersRouter.put("/:id", updateWorker);
workersRouter.delete("/:id", deleteWorker);

module.exports = workersRouter;
