// import { Model } from 'sequelize';

import { Sequelize, DataTypes, Model } from 'sequelize';

class Classroom extends Model {
  static associate(models) {
    Classroom.hasMany(models.Student, {
      foreignKey: 'classroom_id',
      as: 'students',
    });
  }
}

Classroom.init(
  {
    class_name: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'Classroom',
  }
);
