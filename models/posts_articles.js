import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class posts_articles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  posts_articles.init(
    {
      post_id: DataTypes.INTEGER,
      cover: DataTypes.STRING,
      text: DataTypes.STRING,
      tags: DataTypes.STRING,
      views: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'posts_articles',
    }
  );
  return posts_articles;
};
