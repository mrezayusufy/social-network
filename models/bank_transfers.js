import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class bank_transfers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  bank_transfers.init(
    {
      user_id: DataTypes.INTEGER,
      handle: DataTypes.STRING,
      package_id: DataTypes.INTEGER,
      price: DataTypes.STRING,
      bank_receipt: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'bank_transfers',
    }
  );
  return bank_transfers;
};
