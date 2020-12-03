import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class packages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  packages.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.STRING,
      period_num: DataTypes.INTEGER,
      period: DataTypes.STRING,
      color: DataTypes.STRING,
      icon: DataTypes.STRING,
      verification_badge_enabled: DataTypes.BOOLEAN,
      boost_posts_enabled: DataTypes.BOOLEAN,
      boost_posts: DataTypes.INTEGER,
      boost_pages_enabled: DataTypes.BOOLEAN,
      boost_pages: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'packages',
    }
  );
  return packages;
};
