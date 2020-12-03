import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class posts_hidden extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  posts_hidden.init(
    {
      post_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'posts_hidden',
    }
  );
  return posts_hidden;
};
