const Equipment = require('../models/Equipment');

exports.getEquipment = async (req, res) => {
  try { res.json(await Equipment.findAll()); } catch (err) { res.status(500).json({ error: err.message }); }
};
exports.addEquipment = async (req, res) => {
  try { res.status(201).json(await Equipment.create(req.body)); } catch (err) { res.status(400).json({ error: err.message }); }
};
exports.deleteEquipment = async (req, res) => {
  try { await Equipment.destroy({ where: { id: req.params.id } }); res.json({ message: 'Deleted' }); } catch (err) { res.status(500).json({ error: err.message }); }
};