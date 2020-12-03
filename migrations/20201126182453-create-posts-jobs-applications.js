'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_jobs_applications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      post_id: {
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      work_place: {
        type: Sequelize.STRING
      },
      work_position: {
        type: Sequelize.STRING
      },
      work_description: {
        type: Sequelize.STRING
      },
      work_from: {
        type: Sequelize.STRING
      },
      work_to: {
        type: Sequelize.STRING
      },
      work_to: {
        type: Sequelize.STRING
      },
      work_now: {
        type: Sequelize.BOOLEAN
      },
      question_1_answer: {
        type: Sequelize.STRING
      },
      question_2_answer: {
        type: Sequelize.STRING
      },
      question_3_answer: {
        type: Sequelize.STRING
      },
      applied_time: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('posts_jobs_applications');
  }
};