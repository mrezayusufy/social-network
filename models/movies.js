import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  movies.init(
    {
      source: DataTypes.STRING,
      source_type: DataTypes.STRING,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      imdb_url: DataTypes.STRING,
      stars: DataTypes.STRING,
      release_year: DataTypes.INTEGER,
      duration: DataTypes.INTEGER,
      genres: DataTypes.STRING,
      poster: DataTypes.STRING,
      views: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'movies',
    }
  );
  return movies;
};
