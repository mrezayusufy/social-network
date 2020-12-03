import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class affiliates_payments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  affiliates_payments.init(
    {
      user_id: DataTypes.INTEGER,
      amount: DataTypes.STRING,
      method: DataTypes.STRING,
      method_value: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'affiliates_payments',
    }
  );
  return affiliates_payments;
};
