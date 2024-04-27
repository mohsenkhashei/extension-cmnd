'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PersonnelServiceTypes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      service_type_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'ServiceTypes', 
          key: 'id'
        },
        onUpdate: 'CASCADE', 
        onDelete: 'CASCADE'  
      },
      personnel_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Personnels', 
          key: 'id'
        },
        onUpdate: 'CASCADE', 
        onDelete: 'CASCADE'  
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PersonnelServiceTypes');
  }
};
