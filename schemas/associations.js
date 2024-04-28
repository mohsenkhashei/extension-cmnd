const sequelize = require('./sequelize');
const ServiceType = require('./service_type');
const Personnel = require('./personnel');
const PersonnelServiceType = require('./personnel_service_type');


Personnel.belongsToMany(ServiceType, { through: PersonnelServiceType, foreignKey: 'personnel_id' });
ServiceType.belongsToMany(Personnel, { through: PersonnelServiceType, foreignKey: 'service_type_id' });
// Message.belongsTo(ServiceType, { foreignKey: 'service_type_id' });

(async () => {
  await sequelize.sync();
  console.log('All models synchronized with database');
})();
