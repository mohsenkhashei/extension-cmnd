const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./sequelize");
const ServiceType = require("./ServiceType");
const Personnel = require("./Personnel");

const Task = sequelize.define("Tasks", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  token: {
    type: DataTypes.UUID,
    allowNull: false,
    unique: true,
  },
  room_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  service_type_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: "ServiceTypes",
      key: "id",
    },
  },
  personnel_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: "Personnels",
      key: "id",
    },
  },
  claimed_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },

  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

Task.belongsTo(ServiceType, { foreignKey: "service_type_id" });
Task.belongsTo(Personnel, { foreignKey: "personnel_id" });

module.exports = Task;
