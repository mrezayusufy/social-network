'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('packages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      period_num: {
        type: Sequelize.INTEGER
      },
      period: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      icon: {
        type: Sequelize.STRING
      },
      verification_badge_enabled: {
        type: Sequelize.BOOLEAN
      },
      boost_posts_enabled: {
        type: Sequelize.BOOLEAN
      },
      boost_posts: {
        type: Sequelize.INTEGER
      },
      boost_pages_enabled: {
        type: Sequelize.BOOLEAN
      },
      boost_pages: {
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
    await queryInterface.dropTable('packages');
  }
};