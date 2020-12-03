import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class posts_jobs_applications extends Model {
    /**
     * Helper method for defining associations.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  posts_jobs_applications.init(
    {
      post_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      work_place: DataTypes.STRING,
      work_position: DataTypes.STRING,
      work_description: DataTypes.STRING,
      work_from: DataTypes.STRING,
      work_to: DataTypes.STRING,
      work_now: DataTypes.BOOLEAN,
      question_1_answer: DataTypes.STRING,
      question_2_answer: DataTypes.STRING,
      question_3_answer: DataTypes.STRING,
      applied_time: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'posts_jobs_applications',
    }
  );
  return posts_jobs_applications;
};
