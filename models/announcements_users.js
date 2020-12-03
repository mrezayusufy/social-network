import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class announcements_users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  announcements_users.init(
    {
      announcement_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'announcements_users',
    }
  );
  return announcements_users;
};
