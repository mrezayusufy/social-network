import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class posts_files extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  posts_files.init(
    {
      post_id: DataTypes.INTEGER,
      source: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'posts_files',
    }
  );
  return posts_files;
};
