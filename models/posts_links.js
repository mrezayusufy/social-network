import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class posts_links extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  posts_links.init(
    {
      post_id: DataTypes.INTEGER,
      source_url: DataTypes.STRING,
      source_host: DataTypes.STRING,
      source_title: DataTypes.STRING,
      source_text: DataTypes.STRING,
      source_thumbnail: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'posts_links',
    }
  );
  return posts_links;
};
