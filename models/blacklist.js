import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class blacklist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  blacklist.init(
    {
      node_type: DataTypes.STRING,
      node_value: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'blacklist',
    }
  );
  return blacklist;
};
