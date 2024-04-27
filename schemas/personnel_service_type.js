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
      model: 'ServiceType',
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


(async () => {
  await PersonnelServiceType.sync();
  console.log('PersonnelServiceType model synchronized with database');
})();


module.exports = PersonnelServiceType;
