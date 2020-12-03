import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class reports extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     */
    static associate() {
      // define association here
    }
  }
  reports.init(
    {
      user_id: DataTypes.INTEGER,
      node_id: DataTypes.INTEGER,
      node_type: DataTypes.STRING,
      time: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'reports',
    }
  );
  return reports;
};
