// ServiceType.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const ServiceType = sequelize.define('ServiceTypes', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = ServiceType;
