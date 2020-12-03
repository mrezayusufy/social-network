import { Model } from 'sequelize';
import Joi from 'joi';

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }

  Users.init(
    {
      user_group: DataTypes.INTEGER,
      user_name: DataTypes.STRING,
      user_email: DataTypes.STRING,
      user_email_verified: DataTypes.BOOLEAN,
      user_email_verification_code: DataTypes.STRING,
      user_phone: DataTypes.STRING,
      user_phone_verified: DataTypes.BOOLEAN,
      user_phone_verification_code: DataTypes.STRING,
      user_password: DataTypes.STRING,
      user_two_factor_enabled: DataTypes.BOOLEAN,
      user_two_factor_key: DataTypes.STRING,
      user_two_factor_gsecret: DataTypes.STRING,
      user_activated: DataTypes.BOOLEAN,
      user_reseted: DataTypes.BOOLEAN,
      user_reset_key: DataTypes.STRING,
      user_subscribed: DataTypes.BOOLEAN,
      user_package: DataTypes.INTEGER,
      user_subscription_date: DataTypes.DATE,
      user_boosted_posts: DataTypes.INTEGER,
      user_boosted_pages: DataTypes.INTEGER,
      user_started: DataTypes.BOOLEAN,
      user_verified: DataTypes.BOOLEAN,
      user_banned: DataTypes.BOOLEAN,
      user_live_requests_counter: DataTypes.INTEGER,
      user_live_requests_lastid: DataTypes.INTEGER,
      user_live_messages_counter: DataTypes.INTEGER,
      user_live_messages_lastid: DataTypes.INTEGER,
      user_live_notifications_counter: DataTypes.INTEGER,
      user_live_notifications_lastid: DataTypes.INTEGER,
      user_latitude: DataTypes.STRING,
      user_longitude: DataTypes.STRING,
      user_location_updated: DataTypes.DATE,
      user_firstname: DataTypes.STRING,
      user_lastname: DataTypes.STRING,
      user_gender: DataTypes.STRING,
      user_picture: DataTypes.STRING,
      user_picture_id: DataTypes.INTEGER,
      user_cover: DataTypes.INTEGER,
      user_cover_id: DataTypes.INTEGER,
      user_cover_position: DataTypes.STRING,
      user_album_pictures: DataTypes.INTEGER,
      user_album_covers: DataTypes.INTEGER,
      user_album_timeline: DataTypes.INTEGER,
      user_pinned_post: DataTypes.INTEGER,
      user_registered: DataTypes.DATE,
      user_last_seen: DataTypes.DATE,
      user_first_failed_login: DataTypes.DATE,
      user_failed_login_ip: DataTypes.STRING,
      user_failed_login_count: DataTypes.INTEGER,
      user_country: DataTypes.INTEGER,
      user_birthdate: DataTypes.DATE,
      user_relationship: DataTypes.STRING,
      user_biography: DataTypes.STRING,
      user_website: DataTypes.STRING,
      user_work_title: DataTypes.STRING,
      user_work_place: DataTypes.STRING,
      user_work_url: DataTypes.STRING,
      user_current_city: DataTypes.STRING,
      user_hometown: DataTypes.STRING,
      user_edu_major: DataTypes.STRING,
      user_edu_school: DataTypes.STRING,
      user_edu_class: DataTypes.STRING,
      user_social_facebook: DataTypes.STRING,
      user_social_twitter: DataTypes.STRING,
      user_social_youtube: DataTypes.STRING,
      user_social_instagram: DataTypes.STRING,
      user_social_linkedin: DataTypes.STRING,
      user_social_vkontakte: DataTypes.STRING,
      user_profile_background: DataTypes.STRING,
      user_chat_enabled: DataTypes.BOOLEAN,
      user_privacy_newsletter: DataTypes.BOOLEAN,
      user_privacy_poke: DataTypes.STRING,
      user_privacy_gifts: DataTypes.STRING,
      user_privacy_wall: DataTypes.STRING,
      user_privacy_birthdate: DataTypes.STRING,
      user_privacy_relationship: DataTypes.STRING,
      user_privacy_basic: DataTypes.STRING,
      user_privacy_work: DataTypes.STRING,
      user_privacy_location: DataTypes.STRING,
      user_privacy_education: DataTypes.STRING,
      user_privacy_other: DataTypes.STRING,
      user_privacy_friends: DataTypes.STRING,
      user_privacy_photos: DataTypes.STRING,
      user_privacy_pages: DataTypes.STRING,
      user_privacy_groups: DataTypes.STRING,
      user_privacy_events: DataTypes.STRING,
      email_post_likes: DataTypes.BOOLEAN,
      email_post_comments: DataTypes.BOOLEAN,
      email_post_shares: DataTypes.BOOLEAN,
      email_wall_posts: DataTypes.BOOLEAN,
      email_mentions: DataTypes.BOOLEAN,
      email_profile_visits: DataTypes.BOOLEAN,
      email_friend_requests: DataTypes.BOOLEAN,
      facebook_connected: DataTypes.BOOLEAN,
      facebook_id: DataTypes.STRING,
      google_connected: DataTypes.BOOLEAN,
      google_id: DataTypes.STRING,
      twitter_connected: DataTypes.BOOLEAN,
      twitter_id: DataTypes.STRING,
      instagram_connected: DataTypes.BOOLEAN,
      instagram_id: DataTypes.STRING,
      linkedin_connected: DataTypes.BOOLEAN,
      linkedin_id: DataTypes.STRING,
      vkontakte_connected: DataTypes.BOOLEAN,
      vkontakte_id: DataTypes.STRING,
      user_referrer_id: DataTypes.INTEGER,
      user_affiliate_balance: DataTypes.STRING,
      user_wallet_balance: DataTypes.STRING,
      user_points: DataTypes.INTEGER,
      chat_sound: DataTypes.BOOLEAN,
      notifications_sound: DataTypes.BOOLEAN,
      onesignal_user_id: DataTypes.STRING,
      user_language: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Users',
    }
  );
  return Users;
};
const validateUser = user => {
  const schema = {
    user_name: Joi.string()
      .min(3)
      .max(50)
      .required(),
    user_email: Joi.string()
      .email()
      .min(5)
      .max(255)
      .required(),
    user_password: Joi.string()
      .min(5)
      .max(255)
      .required(),
  };
  return Joi.validate(user, schema);
};

exports.validate = validateUser;
