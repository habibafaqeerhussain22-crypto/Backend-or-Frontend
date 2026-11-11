const Worker = require('../models/Worker');

// Get all workers
exports.getWorkers = async (req, res) => {
  try {
    const workers = await Worker.findAll();
    res.json(workers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add new worker
exports.addWorker = async (req, res) => {
  try {
    const newWorker = await Worker.create(req.body);
    res.status(201).json(newWorker);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete worker
exports.deleteWorker = async (req, res) => {
  try {
    await Worker.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Worker deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};