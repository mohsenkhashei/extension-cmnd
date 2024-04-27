const { Sequelize, DataTypes } = require('sequelize');
const PersonnelServiceType = require("./personnel_service_type");
const Personnel = require('./personnel');


const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

const ServiceType = sequelize.define('ServiceType', {
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
