import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class posts_offers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  posts_offers.init(
    {
      post_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      discount_type: DataTypes.STRING,
      discount_percent: DataTypes.INTEGER,
      discount_amount: DataTypes.STRING,
      buy_x: DataTypes.STRING,
      get_y: DataTypes.STRING,
      spend_x: DataTypes.STRING,
      amount_y: DataTypes.STRING,
      end_date: DataTypes.DATE,
      thumbnail: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'posts_offers',
    }
  );
  return posts_offers;
};
