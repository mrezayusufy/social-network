'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_offers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      post_id: {
        type: Sequelize.INTEGER
      },
      category_id: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      discount_type: {
        type: Sequelize.STRING
      },
      discount_percent: {
        type: Sequelize.INTEGER
      },
      discount_amount: {
        type: Sequelize.STRING
      },
      buy_x: {
        type: Sequelize.STRING
      },
      get_y: {
        type: Sequelize.STRING
      },
      spend_x: {
        type: Sequelize.STRING
      },
      amount_y: {
        type: Sequelize.STRING
      },
      end_date: {
        type: Sequelize.DATE
      },
      thumbnail: {
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
    await queryInterface.dropTable('posts_offers');
  }
};