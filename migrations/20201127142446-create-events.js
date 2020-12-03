'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_privacy: {
        type: Sequelize.STRING
      },
      event_admin: {
        type: Sequelize.INTEGER
      },
      event_category: {
        type: Sequelize.INTEGER
      },
      event_title: {
        type: Sequelize.STRING
      },
      event_location: {
        type: Sequelize.STRING
      },
      event_description: {
        type: Sequelize.STRING
      },
      event_start_date: {
        type: Sequelize.DATE
      },
      event_end_date: {
        type: Sequelize.DATE
      },
      event_publish_enabled: {
        type: Sequelize.BOOLEAN
      },
      event_publish_approval_enabled: {
        type: Sequelize.BOOLEAN
      },
      event_cover: {
        type: Sequelize.STRING
      },
      event_cover_id: {
        type: Sequelize.INTEGER
      },
      event_cover_position: {
        type: Sequelize.STRING
      },
      event_album_covers: {
        type: Sequelize.INTEGER
      },
      event_album_timeline: {
        type: Sequelize.INTEGER
      },
      event_pinned_post: {
        type: Sequelize.INTEGER
      },
      event_invited: {
        type: Sequelize.INTEGER
      },
      event_interested: {
        type: Sequelize.INTEGER
      },
      event_going: {
        type: Sequelize.INTEGER
      },
      event_date: {
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
    await queryInterface.dropTable('events');
  }
};