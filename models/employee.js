const { Model, DataTypes } = require('sequlize');
const sequelize = require('../config/connection');
const { DATE } = require('sequelize');

class Employee extends Model {}

Employee.init(
    {
        employee_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        manager_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        underscored: true,
        timestamps: false,
        modelName: 'employee',
    }
);

module.exports = Employee;