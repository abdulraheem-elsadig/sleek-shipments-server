const express = require("express");
const {
  getVehicles,
  createVehicle,
  updateVehicle,
  deleteVehicle,
} = require("../controllers/vehicle.controller");

const vehiclesRouter = express.Router();

vehiclesRouter.post("/", createVehicle);
vehiclesRouter.get("/", getVehicles);
vehiclesRouter.put("/:id", updateVehicle);
vehiclesRouter.delete("/:id", deleteVehicle);

module.exports = vehiclesRouter;
