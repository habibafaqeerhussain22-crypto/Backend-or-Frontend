const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Inventory = sequelize.define('Inventory', {
  id: { type: DataTypes.STRING, primaryKey: true },
  item: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.STRING, defaultValue: 'Fertilizer' },
  qty: { type: DataTypes.INTEGER, allowNull: false },
  minQty: { type: DataTypes.INTEGER, allowNull: false },
  unit: { type: DataTypes.STRING, defaultValue: 'Bags' }
});

module.exports = Inventory;