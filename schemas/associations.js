
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
  });
const Personnel = require('./personnel');
const ServiceType = require('./service_type');
const PersonnelServiceType = require('./personnel_service_type');

Personnel.belongsToMany(ServiceType, { through: PersonnelServiceType, foreignKey: 'personnel_id' });
ServiceType.belongsToMany(Personnel, { through: PersonnelServiceType, foreignKey: 'service_type_id' });

(async () => {
  await sequelize.sync();
  console.log('All models synchronized with database');
})();