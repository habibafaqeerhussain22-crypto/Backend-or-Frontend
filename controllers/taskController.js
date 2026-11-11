const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
  try { res.json(await Task.findAll()); } catch (err) { res.status(500).json({ error: err.message }); }
};
exports.addTask = async (req, res) => {
  try { res.status(201).json(await Task.create(req.body)); } catch (err) { res.status(400).json({ error: err.message }); }
};
exports.deleteTask = async (req, res) => {
  try { await Task.destroy({ where: { id: req.params.id } }); res.json({ message: 'Deleted' }); } catch (err) { res.status(500).json({ error: err.message }); }
};