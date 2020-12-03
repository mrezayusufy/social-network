import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class ads_system extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }

  ads_system.init(
    {
      title: DataTypes.STRING,
      place: DataTypes.STRING,
      code: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'ads_system',
    }
  );
  return ads_system;
};
