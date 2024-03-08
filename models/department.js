const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Department extends Model {}

Department.init(
    {
        dept_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        dept_name: {
            type: DataTypes.STRING(30),
            allowNull: false,
        }
    },
    {
        sequelize,
        underscored: true,
        timestamps: false,
        modelName: 'departments',
    }

);

module.exports = Department;