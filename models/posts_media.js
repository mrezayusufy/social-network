import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class posts_media extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  posts_media.init(
    {
      post_id: DataTypes.INTEGER,
      source_url: DataTypes.STRING,
      source_provider: DataTypes.STRING,
      source_type: DataTypes.STRING,
      source_title: DataTypes.STRING,
      source_text: DataTypes.STRING,
      source_html: DataTypes.STRING,
      source_thumbnail: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'posts_media',
    }
  );
  return posts_media;
};
