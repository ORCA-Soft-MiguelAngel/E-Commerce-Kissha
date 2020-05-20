/* jshint indent: 2 */
const DataTypes = require('sequelize')
const mysql = require('../database')

const users = mysql.define('users', {
  'id': {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    comment: "null",
    autoIncrement: true
  },
  'firstName': {
    type: DataTypes.STRING(100),
    allowNull: false,
    comment: "null"
  },
  'lastName': {
    type: DataTypes.STRING(100),
    allowNull: true,
    comment: "null"
  },
  'password': {
    type: DataTypes.STRING(255),
    allowNull: false,
    comment: "null"
  },
  'email': {
    type: DataTypes.STRING(100),
    allowNull: false,
    comment: "null"
  },
  'phone': {
    type: DataTypes.STRING(11),
    allowNull: true,
    comment: "null"
  },
  'lastVisit': {
    type: DataTypes.DATE,
    allowNull: true,
    comment: "null"
  },
  'created_at': {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: mysql.literal('CURRENT_TIMESTAMP'),
    comment: "null"
  },
  'updated_at': {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: mysql.literal('CURRENT_TIMESTAMP'),
    comment: "null"
  }
}, {
  tableName: 'users'
});




module.exports = users;

