import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class packages_payments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  packages_payments.init(
    {
      payment_date: DataTypes.DATE,
      package_name: DataTypes.STRING,
      package_price: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'packages_payments',
    }
  );
  return packages_payments;
};
