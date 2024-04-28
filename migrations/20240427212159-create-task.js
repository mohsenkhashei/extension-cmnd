'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tasks', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      token: {
        type: Sequelize.UUID,
        allowNull: false,
        unique: true
      },
      room_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      service_type_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ServiceType',
          key: 'id'
        }
      },
      personnel_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Personnel',
          key: 'id'
        }
      },
      claimed_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tasks');
  }
};
