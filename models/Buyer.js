const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Buyer = sequelize.define('Buyer', {
  id: { type: DataTypes.STRING, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  cnic: { type: DataTypes.STRING, allowNull: false },
  cropName: { type: DataTypes.STRING },
  quantity: { type: DataTypes.INTEGER, allowNull: false },
  date: { type: DataTypes.DATEONLY },
  imageBase64: { type: DataTypes.TEXT },
  status: { type: DataTypes.STRING, defaultValue: 'Pending' }
});

module.exports = Buyer;