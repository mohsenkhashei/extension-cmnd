const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Personnel = sequelize.define('Personnels', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = Personnel;
