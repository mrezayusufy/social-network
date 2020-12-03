import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class widgets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  widgets.init(
    {
      title: DataTypes.STRING,
      place: DataTypes.STRING,
      place_order: DataTypes.INTEGER,
      code: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'widgets',
    }
  );
  return widgets;
};
