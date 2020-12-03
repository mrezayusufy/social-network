import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class system_options extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  system_options.init(
    {
      option_name: DataTypes.STRING,
      option_value: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'system_options',
    }
  );
  return system_options;
};
