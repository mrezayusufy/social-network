import Sequelize from 'sequelize';

const sequelize = new Sequelize('socialnetwork', 'postgres', 'admin1234', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres', // Type of database, because Sequelize also support MySQL
  logging: false, // Change to true if wants to see log of database
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
