'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      user_type: {
        type: Sequelize.STRING
      },
      in_group: {
        type: Sequelize.BOOLEAN
      },
      group_approved: {
        type: Sequelize.BOOLEAN
      },
      in_event: {
        type: Sequelize.BOOLEAN
      },
      event_id: {
        type: Sequelize.INTEGER
      },
      event_approved: {
        type: Sequelize.BOOLEAN
      },
      in_wall: {
        type: Sequelize.BOOLEAN
      },
      wall_id: {
        type: Sequelize.INTEGER
      },
      post_type: {
        type: Sequelize.STRING
      },
      colored_pattern: {
        type: Sequelize.INTEGER
      },
      origin_id: {
        type: Sequelize.INTEGER
      },
      time: {
        type: Sequelize.DATE
      },
      location: {
        type: Sequelize.STRING
      },
      privacy: {
        type: Sequelize.STRING
      },
      text: {
        type: Sequelize.STRING
      },
      feeling_action: {
        type: Sequelize.STRING
      },
      feeling_value: {
        type: Sequelize.STRING
      },
      boosted: {
        type: Sequelize.BOOLEAN
      },
      boosted_by: {
        type: Sequelize.INTEGER
      },
      comments_disabled: {
        type: Sequelize.BOOLEAN
      },
      is_hidden: {
        type: Sequelize.BOOLEAN
      },
      is_anonymous: {
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
      shares: {
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
    await queryInterface.dropTable('posts');
  }
};