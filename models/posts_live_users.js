import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class posts_live_users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  posts_live_users.init(
    {
      user_id: DataTypes.INTEGER,
      post_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'posts_live_users',
    }
  );
  return posts_live_users;
};
