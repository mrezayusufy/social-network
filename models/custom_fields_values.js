import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class custom_fields_values extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  custom_fields_values.init(
    {
      value: DataTypes.STRING,
      field_id: DataTypes.INTEGER,
      node_id: DataTypes.INTEGER,
      node_type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'custom_fields_values',
    }
  );
  return custom_fields_values;
};
