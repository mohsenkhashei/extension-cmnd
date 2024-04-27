'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('PersonnelServiceTypes', [
      { service_type_id: 1, personnel_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { service_type_id: 2, personnel_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { service_type_id: 2, personnel_id: 2, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('PersonnelServiceTypes', null, {});
  }
};
