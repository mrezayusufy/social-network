import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class posts_photos_albums extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  posts_photos_albums.init(
    {
      user_id: DataTypes.INTEGER,
      user_type: DataTypes.STRING,
      in_group: DataTypes.BOOLEAN,
      group_id: DataTypes.INTEGER,
      in_event: DataTypes.BOOLEAN,
      event_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      privacy: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'posts_photos_albums',
    }
  );
  return posts_photos_albums;
};
