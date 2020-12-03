import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class hashtags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  hashtags.init(
    {
      hashtag: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'hashtags',
    }
  );
  return hashtags;
};
