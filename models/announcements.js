import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class announcements extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  announcements.init(
    {
      name: DataTypes.STRING,
      title: DataTypes.STRING,
      type: DataTypes.STRING,
      code: DataTypes.STRING,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'announcements',
    }
  );
  return announcements;
};
