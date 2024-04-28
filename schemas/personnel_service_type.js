const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const PersonnelServiceType = sequelize.define('PersonnelServiceTypes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    service_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'ServiceTypes',
            key: 'id'
        }
    },
    personnel_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Personnel',
            key: 'id'
        }
    }
});

module.exports = PersonnelServiceType;