const { Sequelize, DataTypes } = require('sequelize');
const Personnel = require("./personnel.js");
const Task = require("./task.js");

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

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
