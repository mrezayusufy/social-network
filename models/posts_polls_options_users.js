import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class posts_polls_options_users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  posts_polls_options_users.init(
    {
      user_id: DataTypes.INTEGER,
      poll_id: DataTypes.INTEGER,
      option_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'posts_polls_options_users',
    }
  );
  return posts_polls_options_users;
};
