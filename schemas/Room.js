const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./sequelize");

const Room = sequelize.define("Rooms", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  lat: {
    type: DataTypes.FLOAT,
    allowNull: false,
    unique: true,
  },
  lng: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

module.exports = Room;
