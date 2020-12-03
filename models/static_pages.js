import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class static_pages extends Model {
    /**
     * Helper method for defining associations.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  static_pages.init(
    {
      page_url: DataTypes.STRING,
      page_title: DataTypes.STRING,
      page_text: DataTypes.STRING,
      page_in_footer: DataTypes.BOOLEAN,
      page_order: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'static_pages',
    }
  );
  return static_pages;
};
