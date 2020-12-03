'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_photos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      post_id: {
        type: Sequelize.INTEGER
      },
      album_id: {
        type: Sequelize.INTEGER
      },
      source: {
        type: Sequelize.STRING
      },
      blur: {
        type: Sequelize.BOOLEAN
      },
      reaction_like_count: {
        type: Sequelize.INTEGER
      },
      reaction_love_count: {
        type: Sequelize.INTEGER
      },
      reaction_haha_count: {
        type: Sequelize.INTEGER
      },
      reaction_yay_count: {
        type: Sequelize.INTEGER
      },
      reaction_wow_count: {
        type: Sequelize.INTEGER
      },
      reaction_sad_count: {
        type: Sequelize.INTEGER
      },
      reaction_angry_count: {
        type: Sequelize.INTEGER
      },
      comments: {
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
    await queryInterface.dropTable('posts_photos');
  }
};