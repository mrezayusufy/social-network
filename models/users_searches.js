import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class users_searches extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  users_searches.init(
    {
      user_id: DataTypes.INTEGER,
      node_id: DataTypes.INTEGER,
      node_type: DataTypes.STRING,
      time: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'users_searches',
    }
  );
  return users_searches;
};
