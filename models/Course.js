//const { DataTypes, STRING } = require('sequelize/types');
const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Course extends Model {}

Course.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    course_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    provider: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'course'
  }
);

module.exports = Course;