const { Sequelize, DataTypes } = require('sequelize');
const PersonnelServiceType = require("./personnel_service_type");

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

ServiceType.belongsToMany(Personnel, { through: PersonnelServiceType, foreignKey: 'service_type_id' });

module.exports = ServiceType;
