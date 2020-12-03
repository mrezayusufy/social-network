'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      node_id: {
        type: Sequelize.INTEGER
      },
      node_type: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      user_type: {
        type: Sequelize.STRING
      },
      text: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      voice_note: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.DATE
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
      replies: {
        type: Sequelize.INTEGER
      },
      points_earned: {
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
    await queryInterface.dropTable('posts_comments');
  }
};