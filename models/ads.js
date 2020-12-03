import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class ads extends Model {}

  ads.init(
    {
      status: DataTypes.BOOLEAN,
      counts: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'ads',
    }
  );
  return ads;
};
