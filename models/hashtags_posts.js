import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class hashtags_posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  hashtags_posts.init(
    {
      post_id: DataTypes.INTEGER,
      hashtag_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'hashtags_posts',
    }
  );
  return hashtags_posts;
};
