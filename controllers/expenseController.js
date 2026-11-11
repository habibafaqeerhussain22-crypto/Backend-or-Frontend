const Expense = require('../models/Expense');

exports.getExpenses = async (req, res) => {
  try { res.json(await Expense.findAll()); } catch (err) { res.status(500).json({ error: err.message }); }
};
exports.addExpense = async (req, res) => {
  try { res.status(201).json(await Expense.create(req.body)); } catch (err) { res.status(400).json({ error: err.message }); }
};
exports.deleteExpense = async (req, res) => {
  try { await Expense.destroy({ where: { id: req.params.id } }); res.json({ message: 'Deleted' }); } catch (err) { res.status(500).json({ error: err.message }); }
};
