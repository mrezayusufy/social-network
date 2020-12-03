import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class system_languages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  system_languages.init(
    {
      code: DataTypes.STRING,
      title: DataTypes.STRING,
      flag: DataTypes.STRING,
      dir: DataTypes.STRING,
      default: DataTypes.BOOLEAN,
      enabled: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'system_languages',
    }
  );
  return system_languages;
};
