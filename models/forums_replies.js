import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class forums_replies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  forums_replies.init(
    {
      thread_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      text: DataTypes.STRING,
      time: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'forums_replies',
    }
  );
  return forums_replies;
};
