import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class games_players extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  games_players.init(
    {
      game_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      last_played_time: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'games_players',
    }
  );
  return games_players;
};
