const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Images extends Model {}

Images.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        course_name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          synopsis: {
            type: DataTypes.STRING,
            allowNull: false
          },
          school: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        file_image: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        course_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'course',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'images'
    }
);

module.exports = Images;
