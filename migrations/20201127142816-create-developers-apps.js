'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('developers_apps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      app_user_id: {
        type: Sequelize.INTEGER
      },
      app_category_id: {
        type: Sequelize.INTEGER
      },
      app_auth_id: {
        type: Sequelize.STRING
      },
      app_auth_secret: {
        type: Sequelize.STRING
      },
      app_name: {
        type: Sequelize.STRING
      },
      app_domain: {
        type: Sequelize.STRING
      },
      app_redirect_url: {
        type: Sequelize.STRING
      },
      app_description: {
        type: Sequelize.STRING
      },
      app_icon: {
        type: Sequelize.STRING
      },
      app_date: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('developers_apps');
  }
};