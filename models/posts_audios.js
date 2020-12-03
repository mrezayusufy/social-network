import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class posts_audios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  posts_audios.init(
    {
      post_id: DataTypes.INTEGER,
      source: DataTypes.STRING,
      views: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'posts_audios',
    }
  );
  return posts_audios;
};
