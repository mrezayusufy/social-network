import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class pages_likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  pages_likes.init(
    {
      page_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'pages_likes',
    }
  );
  return pages_likes;
};
