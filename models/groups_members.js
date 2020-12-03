import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class groups_members extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  groups_members.init(
    {
      group_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      approved: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'groups_members',
    }
  );
  return groups_members;
};
