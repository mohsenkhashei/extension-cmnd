'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ServiceTypes', [
      { title: 'Provide Car',  createdAt: new Date(), updatedAt: new Date() },
      { title: 'Service Help', createdAt: new Date(), updatedAt: new Date() },
      { title:'Coordinatior',  createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ServiceTypes', null, {});
  }
};
