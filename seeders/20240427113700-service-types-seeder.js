'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ServiceTypes', [
      { name: 'Provide Car',  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Service Help', createdAt: new Date(), updatedAt: new Date() },
      { name:'Coordinatior',  createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ServiceTypes', null, {});
  }
};
