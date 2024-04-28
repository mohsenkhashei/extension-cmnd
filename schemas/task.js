const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./sequelize');
const ServiceType = require('./service_type');
const Personnel = require('./personnel');

const Task = sequelize.define('Tasks', {
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
    allowNull: true,
    references: {
        model: 'ServiceTypes',
        key: 'id'
    }
},
    personnel_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Personnel',
            key: 'id'
        }
},
  claimed_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
});

Task.belongsTo(ServiceType, { foreignKey: 'service_type_id' });
Task.belongsTo(Personnel, { foreignKey: 'personnel_id' });

module.exports = Task;
