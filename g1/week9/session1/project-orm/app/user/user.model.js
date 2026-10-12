const { DataTypes } = require('sequelize');
const { sequelize } = require('../common/db/connection');

const User = sequelize.define(
  'User',
  {
    userName: {
      type: DataTypes.STRING(150),
      allowNull: false,
      field: 'user_name'
    },
    email: {
      type: DataTypes.STRING(250),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'hashed_password'
    }
  },
  {
    timestamps: true, // created_at , updated_at,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    paranoid: true
  }
);

module.exports = { User };