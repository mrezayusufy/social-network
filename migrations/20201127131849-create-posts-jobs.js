'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      post_id: {
        type: Sequelize.INTEGER
      },
      category_id: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      salary_minimum: {
        type: Sequelize.STRING
      },
      salary_maximum: {
        type: Sequelize.STRING
      },
      pay_salary_per: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      question_1_type: {
        type: Sequelize.STRING
      },
      question_1_title: {
        type: Sequelize.STRING
      },
      question_1_choices: {
        type: Sequelize.STRING
      },
      question_2_type: {
        type: Sequelize.STRING
      },
      question_2_title: {
        type: Sequelize.STRING
      },
      question_2_choices: {
        type: Sequelize.STRING
      },
      question_3_type: {
        type: Sequelize.STRING
      },
      question_3_title: {
        type: Sequelize.STRING
      },
      question_3_choices: {
        type: Sequelize.STRING
      },
      cover_image: {
        type: Sequelize.STRING
      },
      available: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts_jobs');
  }
};