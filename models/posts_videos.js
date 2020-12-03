import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class posts_videos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }

  posts_videos.init(
    {
      post_id: DataTypes.INTEGER,
      source: DataTypes.STRING,
      thumbnail: DataTypes.STRING,
      views: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'posts_videos',
    }
  );
  return posts_videos;
};
