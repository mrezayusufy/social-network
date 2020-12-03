import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class users_invitations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  users_invitations.init(
    {
      user_id: DataTypes.INTEGER,
      email: DataTypes.STRING,
      invitation_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'users_invitations',
    }
  );
  return users_invitations;
};
