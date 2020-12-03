import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class conversations_calls_audio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  conversations_calls_audio.init(
    {
      from_user_id: DataTypes.INTEGER,
      from_user_token: DataTypes.STRING,
      to_user_id: DataTypes.INTEGER,
      to_user_token: DataTypes.STRING,
      room: DataTypes.STRING,
      answered: DataTypes.BOOLEAN,
      declined: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'conversations_calls_audio',
    }
  );
  return conversations_calls_audio;
};
