import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class posts_colored_patterns extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  posts_colored_patterns.init(
    {
      type: DataTypes.STRING,
      background_image: DataTypes.STRING,
      background_color_1: DataTypes.STRING,
      background_color_2: DataTypes.STRING,
      text_color: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'posts_colored_patterns',
    }
  );
  return posts_colored_patterns;
};
