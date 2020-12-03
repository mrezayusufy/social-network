import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class conversations_messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  conversations_messages.init(
    {
      conversation_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      message: DataTypes.STRING,
      image: DataTypes.STRING,
      voice_note: DataTypes.STRING,
      time: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'conversations_messages',
    }
  );
  return conversations_messages;
};
