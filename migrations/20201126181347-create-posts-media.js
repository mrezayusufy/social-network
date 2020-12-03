'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_media', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      post_id: {
        type: Sequelize.INTEGER
      },
      source_url: {
        type: Sequelize.STRING
      },
      source_provider: {
        type: Sequelize.STRING
      },
      source_type: {
        type: Sequelize.STRING
      },
      source_title: {
        type: Sequelize.STRING
      },
      source_text: {
        type: Sequelize.STRING
      },
      source_html: {
        type: Sequelize.STRING
      },
      source_thumbnail: {
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
    await queryInterface.dropTable('posts_media');
  }
};