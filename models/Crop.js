const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Crop = sequelize.define('Crop', {
  id: { type: DataTypes.STRING, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  field: { type: DataTypes.STRING, allowNull: false },
  cuttingDate: { type: DataTypes.DATEONLY, allowNull: false },
  healthScore: { type: DataTypes.INTEGER, defaultValue: 80 },
  totalStock: { type: DataTypes.INTEGER, allowNull: false },
  stockRemaining: { type: DataTypes.INTEGER, allowNull: false },
  status: { type: DataTypes.STRING, defaultValue: 'Healthy' }
});

module.exports = Crop;