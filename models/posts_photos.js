import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class posts_photos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  posts_photos.init(
    {
      post_id: DataTypes.INTEGER,
      album_id: DataTypes.INTEGER,
      source: DataTypes.STRING,
      blur: DataTypes.BOOLEAN,
      reaction_like_count: DataTypes.INTEGER,
      reaction_love_count: DataTypes.INTEGER,
      reaction_haha_count: DataTypes.INTEGER,
      reaction_yay_count: DataTypes.INTEGER,
      reaction_wow_count: DataTypes.INTEGER,
      reaction_sad_count: DataTypes.INTEGER,
      reaction_angry_count: DataTypes.INTEGER,
      comments: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'posts_photos',
    }
  );
  return posts_photos;
};
