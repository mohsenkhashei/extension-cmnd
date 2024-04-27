const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

const PersonnelServiceType = sequelize.define('PersonnelServiceType', {
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

PersonnelServiceType.belongsTo(ServiceType, { foreignKey: 'service_type_id' });
PersonnelServiceType.belongsTo(Personnel, { foreignKey: 'personnel_id' });

module.exports = PersonnelServiceType;