const { Vehicle } = require("../models/index");

exports.createVehicle = async (req, res) => {
  const { photo, name, load } = req.body;
  try {
    const newVehicle = await Vehicle.create({ photo, name, load });
    return res.json(newVehicle);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

exports.getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.findAll();
    return res.json(vehicles);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};
exports.updateVehicle = async (req, res) => {
  const { id } = req.params;
  const { photo, name, load, is_active } = req.body;

  try {
    const vehicle = await Vehicle.findOne({ where: { id } });
    if (!vehicle) return res.status(404).json({ message: "No vehicle found" });

    vehicle.name = name || vehicle.name;
    vehicle.photo = photo || vehicle.photo;
    vehicle.load = load || vehicle.load;
    vehicle.is_active = is_active ?? vehicle.is_active;

    await vehicle.save();
    return res.json(vehicle);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

exports.deleteVehicle = async (req, res) => {
  const { id } = req.params;

  try {
    const vehicle = await Vehicle.findOne({ where: { id } });
    if (!vehicle) return res.status(404).json({ message: "No vehicle found" });
    await vehicle.destroy();

    return res.json({ message: `Vehicle ${vehicle.name} has beed deleted` });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};
