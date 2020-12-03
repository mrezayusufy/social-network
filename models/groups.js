import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class groups extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  groups.init(
    {
      group_privacy: DataTypes.STRING,
      group_admin: DataTypes.INTEGER,
      group_category: DataTypes.INTEGER,
      group_name: DataTypes.STRING,
      group_title: DataTypes.STRING,
      group_description: DataTypes.STRING,
      group_publish_enabled: DataTypes.BOOLEAN,
      group_publish_approval_enabled: DataTypes.BOOLEAN,
      group_picture: DataTypes.STRING,
      group_picture_id: DataTypes.INTEGER,
      group_cover: DataTypes.STRING,
      group_cover_id: DataTypes.INTEGER,
      group_cover_position: DataTypes.STRING,
      group_album_pictures: DataTypes.INTEGER,
      group_album_covers: DataTypes.INTEGER,
      group_album_timeline: DataTypes.INTEGER,
      group_pinned_post: DataTypes.INTEGER,
      group_members: DataTypes.INTEGER,
      group_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'groups',
    }
  );
  return groups;
};
