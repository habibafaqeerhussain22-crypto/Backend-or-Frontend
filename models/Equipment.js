const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Equipment = sequelize.define('Equipment', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.STRING, defaultValue: 'Tractor' },
  purchaseDate: { type: DataTypes.DATEONLY, allowNull: false },
  status: { type: DataTypes.STRING, defaultValue: 'Active' },
  lastServiceDate: { type: DataTypes.DATEONLY },
  serviceIntervalDays: { type: DataTypes.INTEGER, allowNull: false }
});

module.exports = Equipment;