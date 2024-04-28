const sequelize = require("./sequelize");
const ServiceType = require("./ServiceType");
const Personnel = require("./Personnel");
const PersonnelServiceType = require("./PersonnelServiceType");

Personnel.belongsToMany(ServiceType, {
  through: PersonnelServiceType,
  foreignKey: "personnel_id",
});
ServiceType.belongsToMany(Personnel, {
  through: PersonnelServiceType,
  foreignKey: "service_type_id",
});

(async () => {
  await sequelize.sync();
  console.log("All models synchronized with database");
})();
