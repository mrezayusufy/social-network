import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class posts_jobs extends Model {
    /**
     * Helper method for defining associations.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  posts_jobs.init(
    {
      post_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      location: DataTypes.STRING,
      salary_minimum: DataTypes.STRING,
      salary_maximum: DataTypes.STRING,
      pay_salary_per: DataTypes.STRING,
      type: DataTypes.STRING,
      question_1_type: DataTypes.STRING,
      question_1_title: DataTypes.STRING,
      question_1_choices: DataTypes.STRING,
      question_2_type: DataTypes.STRING,
      question_2_title: DataTypes.STRING,
      question_2_choices: DataTypes.STRING,
      question_3_type: DataTypes.STRING,
      question_3_title: DataTypes.STRING,
      question_3_choices: DataTypes.STRING,
      cover_image: DataTypes.STRING,
      available: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'posts_jobs',
    }
  );
  return posts_jobs;
};
