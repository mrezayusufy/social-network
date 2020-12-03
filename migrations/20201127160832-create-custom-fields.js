'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('custom_fields', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      field_for: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      select_options: {
        type: Sequelize.STRING
      },
      label: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      place: {
        type: Sequelize.STRING
      },
      length: {
        type: Sequelize.INTEGER
      },
      field_order: {
        type: Sequelize.INTEGER
      },
      mandatory: {
        type: Sequelize.BOOLEAN
      },
      in_registration: {
        type: Sequelize.BOOLEAN
      },
      in_profile: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('custom_fields');
  }
};