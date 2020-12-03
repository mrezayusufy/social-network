import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class posts_saved extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  posts_saved.init(
    {
      post_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      time: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'posts_saved',
    }
  );
  return posts_saved;
};
