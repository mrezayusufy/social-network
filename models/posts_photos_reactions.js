import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class posts_photos_reactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  posts_photos_reactions.init(
    {
      photo_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      reaction: DataTypes.STRING,
      reaction_time: DataTypes.DATE,
      points_earned: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'posts_photos_reactions',
    }
  );
  return posts_photos_reactions;
};
