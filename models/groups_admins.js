import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class groups_admins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  groups_admins.init(
    {
      group_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'groups_admins',
    }
  );
  return groups_admins;
};
