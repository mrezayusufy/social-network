import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class users_sessions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  users_sessions.init(
    {
      session_token: DataTypes.STRING,
      session_date: DataTypes.DATE,
      user_id: DataTypes.INTEGER,
      user_browser: DataTypes.STRING,
      user_os: DataTypes.STRING,
      user_ip: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'users_sessions',
    }
  );
  return users_sessions;
};
