module.exports = (sequelize, DataTypes) => {
  const stories = sequelize.define('stories', {
    user_id: DataTypes.INTEGER,
    time: DataTypes.DATE,
  });
  return stories;
};
