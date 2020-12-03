import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class coinpayments_transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  coinpayments_transactions.init(
    {
      transaction_txn_id: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      amount: DataTypes.STRING,
      product: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      status_message: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'coinpayments_transactions',
    }
  );
  return coinpayments_transactions;
};
