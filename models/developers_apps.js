import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class developers_apps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  developers_apps.init(
    {
      app_user_id: DataTypes.INTEGER,
      app_category_id: DataTypes.INTEGER,
      app_auth_id: DataTypes.STRING,
      app_auth_secret: DataTypes.STRING,
      app_name: DataTypes.STRING,
      app_domain: DataTypes.STRING,
      app_redirect_url: DataTypes.STRING,
      app_description: DataTypes.STRING,
      app_icon: DataTypes.STRING,
      app_date: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'developers_apps',
    }
  );
  return developers_apps;
};
