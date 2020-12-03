'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('static_pages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      page_url: {
        type: Sequelize.STRING
      },
      page_title: {
        type: Sequelize.STRING
      },
      page_text: {
        type: Sequelize.STRING
      },
      page_in_footer: {
        type: Sequelize.BOOLEAN
      },
      page_order: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('static_pages');
  }
};