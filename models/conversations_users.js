import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class conversations_users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  conversations_users.init(
    {
      conversation_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      seen: DataTypes.BOOLEAN,
      typing: DataTypes.BOOLEAN,
      deleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'conversations_users',
    }
  );
  return conversations_users;
};
