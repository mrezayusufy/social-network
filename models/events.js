import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  events.init(
    {
      event_privacy: DataTypes.STRING,
      event_admin: DataTypes.INTEGER,
      event_category: DataTypes.INTEGER,
      event_title: DataTypes.STRING,
      event_location: DataTypes.STRING,
      event_description: DataTypes.STRING,
      event_start_date: DataTypes.DATE,
      event_end_date: DataTypes.DATE,
      event_publish_enabled: DataTypes.BOOLEAN,
      event_publish_approval_enabled: DataTypes.BOOLEAN,
      event_cover: DataTypes.STRING,
      event_cover_id: DataTypes.INTEGER,
      event_cover_position: DataTypes.STRING,
      event_album_covers: DataTypes.INTEGER,
      event_album_timeline: DataTypes.INTEGER,
      event_pinned_post: DataTypes.INTEGER,
      event_invited: DataTypes.INTEGER,
      event_interested: DataTypes.INTEGER,
      event_going: DataTypes.INTEGER,
      event_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'events',
    }
  );
  return events;
};
