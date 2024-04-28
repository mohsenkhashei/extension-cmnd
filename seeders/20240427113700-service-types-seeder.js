"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "ServiceTypes",
      [
        {
          title: "Room Cleaning",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Laundry Service",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { title: "Room Service", createdAt: new Date(), updatedAt: new Date() },
        {
          title: "Maintenance Request",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Damage Report",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Reservation Inquiry",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Complaint Resolution",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Food Delivery",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Technical Support",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Housekeeping Request",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Transportation Assistance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Front Desk Assistance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Lost and Found Inquiry",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Special Event Planning",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Emergency Medical Assistance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Internet Connection Issues",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("ServiceTypes", null, {});
  },
};
