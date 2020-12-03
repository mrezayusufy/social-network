import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class system_currencies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  system_currencies.init(
    {
      name: DataTypes.STRING,
      code: DataTypes.STRING,
      symbol: DataTypes.STRING,
      default: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'system_currencies',
    }
  );
  return system_currencies;
};
