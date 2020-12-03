import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class users_pokes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  users_pokes.init(
    {
      user_id: DataTypes.INTEGER,
      poked_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'users_pokes',
    }
  );
  return users_pokes;
};
