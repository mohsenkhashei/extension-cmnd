"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Rooms", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      lat: {
        type: Sequelize.FLOAT,
        allowNull: false,
        unique: true,
      },
      lng: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Rooms");
  },
};
