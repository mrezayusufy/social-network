'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ads_campaigns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      campaign_user_id: {
        type: Sequelize.INTEGER
      },
      campaign_title: {
        type: Sequelize.STRING
      },
      campaign_start_date: {
        type: Sequelize.DATE
      },
      campaign_end_date: {
        type: Sequelize.DATE
      },
      campaign_budget: {
        type: Sequelize.INTEGER
      },
      campaign_spend: {
        type: Sequelize.INTEGER
      },
      campaign_bidding: {
        type: Sequelize.STRING
      },
      audience_countries: {
        type: Sequelize.STRING
      },
      audience_gender: {
        type: Sequelize.STRING
      },
      audience_relationship: {
        type: Sequelize.STRING
      },
      ads_title: {
        type: Sequelize.STRING
      },
      ads_description: {
        type: Sequelize.STRING
      },
      ads_type: {
        type: Sequelize.STRING
      },
      ads_url: {
        type: Sequelize.STRING
      },
      ads_page: {
        type: Sequelize.INTEGER
      },
      ads_group: {
        type: Sequelize.INTEGER
      },
      ads_event: {
        type: Sequelize.INTEGER
      },
      ads_placement: {
        type: Sequelize.STRING
      },
      ads_image: {
        type: Sequelize.STRING
      },
      campaign_created_date: {
        type: Sequelize.DATE
      },
      campaign_is_active: {
        type: Sequelize.BOOLEAN
      },
      campaign_views: {
        type: Sequelize.INTEGER
      },
      campaign_clicks: {
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
    await queryInterface.dropTable('ads_campaigns');
  }
};