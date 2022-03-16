const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Course extends Model {}

Course.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
  
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
   
  
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


