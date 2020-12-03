import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class movies_genres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  movies_genres.init(
    {
      genre_name: DataTypes.STRING,
      genre_order: DataTypes.INTEGER,
      genre_description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'movies_genres',
    }
  );
  return movies_genres;
};
