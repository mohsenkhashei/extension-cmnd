const { Sequelize, DataTypes } = require("sequelize");
const ServiceType = require("./ServiceType");
const sequelize = require("./sequelize");

// Define the Message model
const Message = sequelize.define("Messages", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  service_type_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: ServiceType,
      key: "id",
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
});

Message.belongsTo(ServiceType, { foreignKey: "service_type_id" });

(async () => {
  await sequelize.sync();
  console.log("Message and ServiceType models synchronized with database");
})();

module.exports = Message;
