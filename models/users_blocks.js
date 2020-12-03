import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class users_blocks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  users_blocks.init(
    {
      user_id: DataTypes.INTEGER,
      blocked_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'users_blocks',
    }
  );
  return users_blocks;
};
