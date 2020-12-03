'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('groups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      group_privacy: {
        type: Sequelize.STRING
      },
      group_admin: {
        type: Sequelize.INTEGER
      },
      group_category: {
        type: Sequelize.INTEGER
      },
      group_name: {
        type: Sequelize.STRING
      },
      group_title: {
        type: Sequelize.STRING
      },
      group_description: {
        type: Sequelize.STRING
      },
      group_publish_enabled: {
        type: Sequelize.BOOLEAN
      },
      group_publish_approval_enabled: {
        type: Sequelize.BOOLEAN
      },
      group_picture: {
        type: Sequelize.STRING
      },
      group_picture_id: {
        type: Sequelize.INTEGER
      },
      group_cover: {
        type: Sequelize.STRING
      },
      group_cover_id: {
        type: Sequelize.INTEGER
      },
      group_cover_position: {
        type: Sequelize.STRING
      },
      group_album_pictures: {
        type: Sequelize.INTEGER
      },
      group_album_covers: {
        type: Sequelize.INTEGER
      },
      group_album_timeline: {
        type: Sequelize.INTEGER
      },
      group_pinned_post: {
        type: Sequelize.INTEGER
      },
      group_members: {
        type: Sequelize.INTEGER
      },
      group_date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('groups');
  }
};