'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Messages', [
      { text: 'Please provide a car for this room ID {ID} {LINK}', service_type_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Please make a company {COMPANY} presentation for client {X} {LINK}', service_type_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Please prepare an agreement for client {X} {LINK}', service_type_id: 2, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Messages', null, {});
  }
};
