const { Sequelize, DataTypes } = require('sequelize');
const PersonnelServiceType = require("./personnel_service_type.js")

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});


const Personnel = sequelize.define('Personnel', {
  personnel_code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true 
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

(async () => {
  await Personnel.sync();
  console.log('Personnel model synchronized with database');
})();

Personnel.belongsToMany(ServiceType, { through: PersonnelServiceType, foreignKey: 'personnel_id' });

module.exports = Personnel;
