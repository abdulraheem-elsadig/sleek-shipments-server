const { Worker } = require("../models/index");

exports.createWorker = async (req, res) => {
  const { photo, name } = req.body;
  try {
    const newWorker = await Worker.create({ photo, name });
    return res.json(newWorker);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

exports.getWorkers = async (req, res) => {
  try {
    const workers = await Worker.findAll();
    return res.json(workers);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};
exports.updateWorker = async (req, res) => {
  const { id } = req.params;
  const { photo, name, is_active } = req.body;

  try {
    const worker = await Worker.findOne({ where: { id } });
    if (!worker) return res.status(404).json({ message: "No worker found" });

    worker.name = name || worker.name;
    worker.photo = photo || worker.photo;
    worker.is_active = is_active ?? worker.is_active;

    await worker.save();
    return res.json(worker);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

exports.deleteWorker = async (req, res) => {
  const { id } = req.params;

  try {
    const worker = await Worker.findOne({ where: { id } });
    if (!worker) return res.status(404).json({ message: "No worker found" });
    await worker.destroy();

    return res.json({ message: `Worker ${worker.name} has beed deleted` });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};
