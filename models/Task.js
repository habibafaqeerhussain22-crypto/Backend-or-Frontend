const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Task = sequelize.define('Task', {
  id: { type: DataTypes.STRING, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.STRING, defaultValue: 'Irrigation' },
  cropId: { type: DataTypes.STRING },
  dueDate: { type: DataTypes.DATEONLY, allowNull: false },
  status: { type: DataTypes.STRING, defaultValue: 'Pending' }
});

module.exports = Task;