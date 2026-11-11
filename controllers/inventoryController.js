const Inventory = require('../models/Inventory');

exports.getInventory = async (req, res) => {
  try { res.json(await Inventory.findAll()); } catch (err) { res.status(500).json({ error: err.message }); }
};
exports.addInventory = async (req, res) => {
  try { res.status(201).json(await Inventory.create(req.body)); } catch (err) { res.status(400).json({ error: err.message }); }
};