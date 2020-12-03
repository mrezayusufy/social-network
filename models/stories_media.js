import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class stories_media extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  stories_media.init(
    {
      story_id: DataTypes.INTEGER,
      source: DataTypes.STRING,
      is_photo: DataTypes.BOOLEAN,
      text: DataTypes.STRING,
      time: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'stories_media',
    }
  );
  return stories_media;
};
