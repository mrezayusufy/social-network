'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_lives', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      post_id: {
        type: Sequelize.INTEGER
      },
      video_thumbnail: {
        type: Sequelize.STRING
      },
      agora_uid: {
        type: Sequelize.INTEGER
      },
      agora_channel_name: {
        type: Sequelize.STRING
      },
      agora_resource_id: {
        type: Sequelize.INTEGER
      },
      agora_sid: {
        type: Sequelize.STRING
      },
      agora_file: {
        type: Sequelize.STRING
      },
      live_ended: {
        type: Sequelize.BOOLEAN
      },
      live_recorded: {
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
    await queryInterface.dropTable('posts_lives');
  }
};