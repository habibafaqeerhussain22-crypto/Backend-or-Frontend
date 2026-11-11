const Buyer = require('../models/Buyer');

exports.getBuyers = async (req, res) => {
  try { res.json(await Buyer.findAll()); } catch (err) { res.status(500).json({ error: err.message }); }
};
exports.addBuyer = async (req, res) => {
  try { res.status(201).json(await Buyer.create(req.body)); } catch (err) { res.status(400).json({ error: err.message }); }
};