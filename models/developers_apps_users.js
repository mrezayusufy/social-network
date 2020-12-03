import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class developers_apps_users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  developers_apps_users.init(
    {
      app_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      auth_key: DataTypes.STRING,
      access_token: DataTypes.STRING,
      access_token_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'developers_apps_users',
    }
  );
  return developers_apps_users;
};
