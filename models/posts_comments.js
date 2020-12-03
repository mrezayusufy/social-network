import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class posts_comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     */
    static associate() {
      // define association here
    }
  }
  posts_comments.init(
    {
      node_id: DataTypes.INTEGER,
      node_type: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      user_type: DataTypes.STRING,
      text: DataTypes.STRING,
      image: DataTypes.STRING,
      voice_note: DataTypes.STRING,
      time: DataTypes.DATE,
      reaction_like_count: DataTypes.INTEGER,
      reaction_love_count: DataTypes.INTEGER,
      reaction_haha_count: DataTypes.INTEGER,
      reaction_yay_count: DataTypes.INTEGER,
      reaction_wow_count: DataTypes.INTEGER,
      reaction_sad_count: DataTypes.INTEGER,
      reaction_angry_count: DataTypes.INTEGER,
      replies: DataTypes.INTEGER,
      points_earned: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'posts_comments',
    }
  );
  return posts_comments;
};
