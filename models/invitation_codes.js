import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class invitation_codes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  invitation_codes.init(
    {
      code: DataTypes.STRING,
      valid: DataTypes.BOOLEAN,
      date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'invitation_codes',
    }
  );
  return invitation_codes;
};
