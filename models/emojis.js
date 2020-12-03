import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class emojis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  emojis.init(
    {
      pattern: DataTypes.STRING,
      class: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'emojis',
    }
  );
  return emojis;
};
