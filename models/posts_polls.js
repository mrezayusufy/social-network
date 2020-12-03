import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class posts_polls extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  posts_polls.init(
    {
      post_id: DataTypes.INTEGER,
      votes: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'posts_polls',
    }
  );
  return posts_polls;
};
