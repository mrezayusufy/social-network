import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class users_gifts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  users_gifts.init(
    {
      from_user_id: DataTypes.INTEGER,
      to_user_id: DataTypes.INTEGER,
      gift_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'users_gifts',
    }
  );
  return users_gifts;
};
