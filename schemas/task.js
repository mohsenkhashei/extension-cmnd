const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./sequelize');
const ServiceType = require('./ServiceType');
const Personnel = require('./Personnel');

const Task = sequelize.define('Task', {
  token: {
    type: DataTypes.UUID,
    allowNull: false,
    unique: true
  },
  room_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  service_type_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  personnel_id: {
    type: DataTypes.INTEGER, 
    allowNull: false
  },
  claimed_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
});

Task.belongsTo(ServiceType, { foreignKey: 'service_type_id' });
Task.belongsTo(Personnel, { foreignKey: 'personnel_id' });

module.exports = Task;
