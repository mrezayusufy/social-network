'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_group: {
        type: Sequelize.INTEGER
      },
      user_name: {
        type: Sequelize.STRING
      },
      user_email: {
        type: Sequelize.STRING
      },
      user_email_verified: {
        type: Sequelize.BOOLEAN
      },
      user_email_verification_code: {
        type: Sequelize.STRING
      },
      user_phone: {
        type: Sequelize.STRING
      },
      user_phone_verified: {
        type: Sequelize.BOOLEAN
      },
      user_phone_verification_code: {
        type: Sequelize.STRING
      },
      user_password: {
        type: Sequelize.STRING
      },
      user_two_factor_enabled: {
        type: Sequelize.BOOLEAN
      },
      user_two_factor_key: {
        type: Sequelize.STRING
      },
      user_two_factor_gsecret: {
        type: Sequelize.STRING
      },
      user_activated: {
        type: Sequelize.BOOLEAN
      },
      user_reseted: {
        type: Sequelize.BOOLEAN
      },
      user_reset_key: {
        type: Sequelize.STRING
      },
      user_subscribed: {
        type: Sequelize.BOOLEAN
      },
      user_package: {
        type: Sequelize.INTEGER
      },
      user_subscription_date: {
        type: Sequelize.DATE
      },
      user_boosted_posts: {
        type: Sequelize.INTEGER
      },
      user_boosted_pages: {
        type: Sequelize.INTEGER
      },
      user_started: {
        type: Sequelize.BOOLEAN
      },
      user_verified: {
        type: Sequelize.BOOLEAN
      },
      user_banned: {
        type: Sequelize.BOOLEAN
      },
      user_live_requests_counter: {
        type: Sequelize.INTEGER
      },
      user_live_requests_lastid: {
        type: Sequelize.INTEGER
      },
      user_live_messages_counter: {
        type: Sequelize.INTEGER
      },
      user_live_messages_lastid: {
        type: Sequelize.INTEGER
      },
      user_live_notifications_counter: {
        type: Sequelize.INTEGER
      },
      user_live_notifications_lastid: {
        type: Sequelize.INTEGER
      },
      user_latitude: {
        type: Sequelize.STRING
      },
      user_longitude: {
        type: Sequelize.STRING
      },
      user_location_updated: {
        type: Sequelize.DATE
      },
      user_firstname: {
        type: Sequelize.STRING
      },
      user_lastname: {
        type: Sequelize.STRING
      },
      user_gender: {
        type: Sequelize.STRING
      },
      user_picture: {
        type: Sequelize.STRING
      },
      user_picture_id: {
        type: Sequelize.INTEGER
      },
      user_cover: {
        type: Sequelize.INTEGER
      },
      user_cover_id: {
        type: Sequelize.INTEGER
      },
      user_cover_position: {
        type: Sequelize.STRING
      },
      user_album_pictures: {
        type: Sequelize.INTEGER
      },
      user_album_covers: {
        type: Sequelize.INTEGER
      },
      user_album_timeline: {
        type: Sequelize.INTEGER
      },
      user_pinned_post: {
        type: Sequelize.INTEGER
      },
      user_registered: {
        type: Sequelize.DATE
      },
      user_last_seen: {
        type: Sequelize.DATE
      },
      user_first_failed_login: {
        type: Sequelize.DATE
      },
      user_failed_login_ip: {
        type: Sequelize.STRING
      },
      user_failed_login_count: {
        type: Sequelize.INTEGER
      },
      user_country: {
        type: Sequelize.INTEGER
      },
      user_birthdate: {
        type: Sequelize.DATE
      },
      user_relationship: {
        type: Sequelize.STRING
      },
      user_biography: {
        type: Sequelize.STRING
      },
      user_website: {
        type: Sequelize.STRING
      },
      user_work_title: {
        type: Sequelize.STRING
      },
      user_work_place: {
        type: Sequelize.STRING
      },
      user_work_url: {
        type: Sequelize.STRING
      },
      user_current_city: {
        type: Sequelize.STRING
      },
      user_hometown: {
        type: Sequelize.STRING
      },
      user_edu_major: {
        type: Sequelize.STRING
      },
      user_edu_school: {
        type: Sequelize.STRING
      },
      user_edu_class: {
        type: Sequelize.STRING
      },
      user_social_facebook: {
        type: Sequelize.STRING
      },
      user_social_twitter: {
        type: Sequelize.STRING
      },
      user_social_youtube: {
        type: Sequelize.STRING
      },
      user_social_instagram: {
        type: Sequelize.STRING
      },
      user_social_linkedin: {
        type: Sequelize.STRING
      },
      user_social_vkontakte: {
        type: Sequelize.STRING
      },
      user_profile_background: {
        type: Sequelize.STRING
      },
      user_chat_enabled: {
        type: Sequelize.BOOLEAN
      },
      user_privacy_newsletter: {
        type: Sequelize.BOOLEAN
      },
      user_privacy_poke: {
        type: Sequelize.STRING
      },
      user_privacy_gifts: {
        type: Sequelize.STRING
      },
      user_privacy_wall: {
        type: Sequelize.STRING
      },
      user_privacy_birthdate: {
        type: Sequelize.STRING
      },
      user_privacy_relationship: {
        type: Sequelize.STRING
      },
      user_privacy_basic: {
        type: Sequelize.STRING
      },
      user_privacy_work: {
        type: Sequelize.STRING
      },
      user_privacy_location: {
        type: Sequelize.STRING
      },
      user_privacy_education: {
        type: Sequelize.STRING
      },
      user_privacy_other: {
        type: Sequelize.STRING
      },
      user_privacy_friends: {
        type: Sequelize.STRING
      },
      user_privacy_photos: {
        type: Sequelize.STRING
      },
      user_privacy_pages: {
        type: Sequelize.STRING
      },
      user_privacy_groups: {
        type: Sequelize.STRING
      },
      user_privacy_events: {
        type: Sequelize.STRING
      },
      email_post_likes: {
        type: Sequelize.BOOLEAN
      },
      email_post_comments: {
        type: Sequelize.BOOLEAN
      },
      email_post_shares: {
        type: Sequelize.BOOLEAN
      },
      email_wall_posts: {
        type: Sequelize.BOOLEAN
      },
      email_mentions: {
        type: Sequelize.BOOLEAN
      },
      email_profile_visits: {
        type: Sequelize.BOOLEAN
      },
      email_friend_requests: {
        type: Sequelize.BOOLEAN
      },
      facebook_connected: {
        type: Sequelize.BOOLEAN
      },
      facebook_id: {
        type: Sequelize.STRING
      },
      google_connected: {
        type: Sequelize.BOOLEAN
      },
      google_id: {
        type: Sequelize.STRING
      },
      twitter_connected: {
        type: Sequelize.BOOLEAN
      },
      twitter_id: {
        type: Sequelize.STRING
      },
      instagram_connected: {
        type: Sequelize.BOOLEAN
      },
      instagram_id: {
        type: Sequelize.STRING
      },
      linkedin_connected: {
        type: Sequelize.BOOLEAN
      },
      linkedin_id: {
        type: Sequelize.STRING
      },
      vkontakte_connected: {
        type: Sequelize.BOOLEAN
      },
      vkontakte_id: {
        type: Sequelize.STRING
      },
      user_referrer_id: {
        type: Sequelize.INTEGER
      },
      user_affiliate_balance: {
        type: Sequelize.STRING
      },
      user_wallet_balance: {
        type: Sequelize.STRING
      },
      user_points: {
        type: Sequelize.INTEGER
      },
      chat_sound: {
        type: Sequelize.BOOLEAN
      },
      notifications_sound: {
        type: Sequelize.BOOLEAN
      },
      onesignal_user_id: {
        type: Sequelize.STRING
      },
      user_language: {
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
    await queryInterface.dropTable('Users');
  }
};