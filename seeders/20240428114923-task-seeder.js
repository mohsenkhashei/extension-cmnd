"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Personnels",
      [
        {
          personnel_code: "P001",
          phone: "123456789",
          email: "person1@example.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          personnel_code: "P002",
          phone: "987654321",
          email: "person2@example.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          personnel_code: "P003",
          phone: "987654321",
          email: "person3@example.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Personnels", null, {});
  },
};
