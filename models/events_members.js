import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class events_members extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  events_members.init(
    {
      event_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      is_invited: DataTypes.BOOLEAN,
      is_interested: DataTypes.BOOLEAN,
      is_going: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'events_members',
    }
  );
  return events_members;
};
