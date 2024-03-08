const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Role extends Model {}

Role.init(
    {
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING(30),
        },
        salary: {
            type: DataTypes.INTEGER,
        },
        dept_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'departments',
                key: 'dept_id',
            }
        }
    },
    {
        sequelize,
        underscored: true,
        timestamps: false,
        modelName: 'role'
    }
);

module.exports = Role;