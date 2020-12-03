import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class pages_invites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  pages_invites.init(
    {
      page_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      from_user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'pages_invites',
    }
  );
  return pages_invites;
};
