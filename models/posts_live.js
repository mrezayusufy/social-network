import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class posts_live extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  posts_live.init(
    {
      post_id: DataTypes.INTEGER,
      video_thumbnail: DataTypes.STRING,
      agora_uid: DataTypes.INTEGER,
      agora_channel_name: DataTypes.STRING,
      agora_resource_id: DataTypes.INTEGER,
      agora_sid: DataTypes.STRING,
      agora_file: DataTypes.STRING,
      live_ended: DataTypes.BOOLEAN,
      live_recorded: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'posts_live',
    }
  );
  return posts_live;
};
