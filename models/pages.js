import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class pages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  pages.init(
    {
      page_admin: DataTypes.INTEGER,
      page_category: DataTypes.INTEGER,
      page_name: DataTypes.STRING,
      page_title: DataTypes.STRING,
      page_picture: DataTypes.STRING,
      page_picture_id: DataTypes.INTEGER,
      page_cover: DataTypes.STRING,
      page_cover_id: DataTypes.INTEGER,
      page_cover_position: DataTypes.STRING,
      page_album_pictures: DataTypes.INTEGER,
      page_album_covers: DataTypes.INTEGER,
      page_album_timeline: DataTypes.INTEGER,
      page_pinned_post: DataTypes.INTEGER,
      page_verified: DataTypes.BOOLEAN,
      page_boosted: DataTypes.BOOLEAN,
      page_boosted_by: DataTypes.INTEGER,
      page_company: DataTypes.STRING,
      page_phone: DataTypes.STRING,
      page_website: DataTypes.STRING,
      page_location: DataTypes.STRING,
      page_description: DataTypes.STRING,
      page_action_text: DataTypes.STRING,
      page_action_color: DataTypes.STRING,
      page_action_url: DataTypes.STRING,
      page_social_facebook: DataTypes.STRING,
      page_social_twitter: DataTypes.STRING,
      page_social_youtube: DataTypes.STRING,
      page_social_instagram: DataTypes.STRING,
      page_social_linkedin: DataTypes.STRING,
      page_social_vkontakte: DataTypes.STRING,
      page_likes: DataTypes.INTEGER,
      page_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'pages',
    }
  );
  return pages;
};
