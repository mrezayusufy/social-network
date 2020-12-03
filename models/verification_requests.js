import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class verification_requests extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  verification_requests.init(
    {
      node_id: DataTypes.INTEGER,
      node_type: DataTypes.STRING,
      photo: DataTypes.STRING,
      passport: DataTypes.STRING,
      message: DataTypes.STRING,
      time: DataTypes.DATE,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'verification_requests',
    }
  );
  return verification_requests;
};
