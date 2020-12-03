import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class custom_fields extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  custom_fields.init(
    {
      field_for: DataTypes.STRING,
      type: DataTypes.STRING,
      select_options: DataTypes.STRING,
      label: DataTypes.STRING,
      description: DataTypes.STRING,
      place: DataTypes.STRING,
      length: DataTypes.INTEGER,
      field_order: DataTypes.INTEGER,
      mandatory: DataTypes.BOOLEAN,
      in_registration: DataTypes.BOOLEAN,
      in_profile: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'custom_fields',
    }
  );
  return custom_fields;
};
