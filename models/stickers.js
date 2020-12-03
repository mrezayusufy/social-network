import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class stickers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  stickers.init(
    {
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'stickers',
    }
  );
  return stickers;
};
