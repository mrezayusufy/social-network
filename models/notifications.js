import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class notifications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  notifications.init(
    {
      to_user_id: DataTypes.INTEGER,
      from_user_id: DataTypes.INTEGER,
      action: DataTypes.STRING,
      node_type: DataTypes.STRING,
      node_url: DataTypes.STRING,
      notify_id: DataTypes.STRING,
      message: DataTypes.STRING,
      time: DataTypes.DATE,
      seen: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'notifications',
    }
  );
  return notifications;
};
