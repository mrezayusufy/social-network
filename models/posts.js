import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  posts.init(
    {
      user_id: DataTypes.INTEGER,
      user_type: DataTypes.STRING,
      in_group: DataTypes.BOOLEAN,
      group_approved: DataTypes.BOOLEAN,
      in_event: DataTypes.BOOLEAN,
      event_id: DataTypes.INTEGER,
      event_approved: DataTypes.BOOLEAN,
      in_wall: DataTypes.BOOLEAN,
      wall_id: DataTypes.INTEGER,
      post_type: DataTypes.STRING,
      colored_pattern: DataTypes.INTEGER,
      origin_id: DataTypes.INTEGER,
      time: DataTypes.DATE,
      location: DataTypes.STRING,
      privacy: DataTypes.STRING,
      text: DataTypes.STRING,
      feeling_action: DataTypes.STRING,
      feeling_value: DataTypes.STRING,
      boosted: DataTypes.BOOLEAN,
      boosted_by: DataTypes.INTEGER,
      comments_disabled: DataTypes.BOOLEAN,
      is_hidden: DataTypes.BOOLEAN,
      is_anonymous: DataTypes.BOOLEAN,
      reaction_like_count: DataTypes.INTEGER,
      reaction_love_count: DataTypes.INTEGER,
      reaction_haha_count: DataTypes.INTEGER,
      reaction_yay_count: DataTypes.INTEGER,
      reaction_wow_count: DataTypes.INTEGER,
      reaction_sad_count: DataTypes.INTEGER,
      reaction_angry_count: DataTypes.INTEGER,
      comments: DataTypes.INTEGER,
      shares: DataTypes.INTEGER,
      points_earned: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'posts',
    }
  );
  return posts;
};
