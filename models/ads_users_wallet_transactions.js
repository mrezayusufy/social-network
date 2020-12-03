import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class ads_users_wallet_transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  ads_users_wallet_transactions.init(
    {
      user_id: DataTypes.INTEGER,
      node_type: DataTypes.STRING,
      node_id: DataTypes.INTEGER,
      amount: DataTypes.STRING,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'ads_users_wallet_transactions',
    }
  );
  return ads_users_wallet_transactions;
};
