import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class groups_categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  groups_categories.init(
    {
      category_name: DataTypes.STRING,
      category_order: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'groups_categories',
    }
  );
  return groups_categories;
};
