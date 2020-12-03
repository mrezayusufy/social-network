'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      page_admin: {
        type: Sequelize.INTEGER
      },
      page_category: {
        type: Sequelize.INTEGER
      },
      page_name: {
        type: Sequelize.STRING
      },
      page_title: {
        type: Sequelize.STRING
      },
      page_picture: {
        type: Sequelize.STRING
      },
      page_picture_id: {
        type: Sequelize.INTEGER
      },
      page_cover: {
        type: Sequelize.STRING
      },
      page_cover_id: {
        type: Sequelize.INTEGER
      },
      page_cover_position: {
        type: Sequelize.STRING
      },
      page_album_pictures: {
        type: Sequelize.INTEGER
      },
      page_album_covers: {
        type: Sequelize.INTEGER
      },
      page_album_timeline: {
        type: Sequelize.INTEGER
      },
      page_pinned_post: {
        type: Sequelize.INTEGER
      },
      page_verified: {
        type: Sequelize.BOOLEAN
      },
      page_boosted: {
        type: Sequelize.BOOLEAN
      },
      page_boosted_by: {
        type: Sequelize.INTEGER
      },
      page_company: {
        type: Sequelize.STRING
      },
      page_phone: {
        type: Sequelize.STRING
      },
      page_website: {
        type: Sequelize.STRING
      },
      page_location: {
        type: Sequelize.STRING
      },
      page_description: {
        type: Sequelize.STRING
      },
      page_action_text: {
        type: Sequelize.STRING
      },
      page_action_color: {
        type: Sequelize.STRING
      },
      page_action_url: {
        type: Sequelize.STRING
      },
      page_social_facebook: {
        type: Sequelize.STRING
      },
      page_social_twitter: {
        type: Sequelize.STRING
      },
      page_social_youtube: {
        type: Sequelize.STRING
      },
      page_social_instagram: {
        type: Sequelize.STRING
      },
      page_social_linkedin: {
        type: Sequelize.STRING
      },
      page_social_vkontakte: {
        type: Sequelize.STRING
      },
      page_likes: {
        type: Sequelize.INTEGER
      },
      page_date: {
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
    await queryInterface.dropTable('pages');
  }
};