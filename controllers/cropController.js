const Crop = require('../models/Crop');

exports.getCrops = async (req, res) => {
  try { res.json(await Crop.findAll()); } catch (err) { res.status(500).json({ error: err.message }); }
};
exports.addCrop = async (req, res) => {
  try { res.status(201).json(await Crop.create(req.body)); } catch (err) { res.status(400).json({ error: err.message }); }
};
exports.deleteCrop = async (req, res) => {
  try { await Crop.destroy({ where: { id: req.params.id } }); res.json({ message: 'Deleted' }); } catch (err) { res.status(500).json({ error: err.message }); }
};