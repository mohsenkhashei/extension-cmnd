const { Sequelize } = require('sequelize');

// Create and configure the Sequelize instance
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

// Export the configured Sequelize instance
module.exports = sequelize;
