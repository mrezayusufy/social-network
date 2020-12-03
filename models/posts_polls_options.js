import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class posts_polls_options extends Model {
    static associate() {
      // define association here
    }
  }
  posts_polls_options.init(
    {
      poll_id: DataTypes.INTEGER,
      text: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'posts_polls_options',
    }
  );
  return posts_polls_options;
};
