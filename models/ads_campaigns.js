import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class ads_campaigns extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }

  ads_campaigns.init(
    {
      campaign_user_id: DataTypes.INTEGER,
      campaign_title: DataTypes.STRING,
      campaign_start_date: DataTypes.DATE,
      campaign_end_date: DataTypes.DATE,
      campaign_budget: DataTypes.INTEGER,
      campaign_spend: DataTypes.INTEGER,
      campaign_bidding: DataTypes.STRING,
      audience_countries: DataTypes.STRING,
      audience_gender: DataTypes.STRING,
      audience_relationship: DataTypes.STRING,
      ads_title: DataTypes.STRING,
      ads_description: DataTypes.STRING,
      ads_type: DataTypes.STRING,
      ads_url: DataTypes.STRING,
      ads_page: DataTypes.INTEGER,
      ads_group: DataTypes.INTEGER,
      ads_event: DataTypes.INTEGER,
      ads_placement: DataTypes.STRING,
      ads_image: DataTypes.STRING,
      campaign_created_date: DataTypes.DATE,
      campaign_is_active: DataTypes.BOOLEAN,
      campaign_views: DataTypes.INTEGER,
      campaign_clicks: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'ads_campaigns',
    }
  );
  return ads_campaigns;
};
