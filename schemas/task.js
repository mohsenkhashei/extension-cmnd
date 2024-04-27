const { Sequelize, DataTypes } = require('sequelize');
const ServiceType = require("./service_type.js");
const Personnel = require("./personnel.js");

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

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
    allowNull: false,
    references:{
        model:'ServiceTypes',
        key:'id'
    }
  },
  personnel_id: {
    type: DataTypes.INTEGER, 
    allowNull: false, 
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



(async () => {
  await Task.sync(); 
  console.log('Tasks table synchronized with database');
})();

module.exports = Task;
