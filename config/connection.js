const mysql = require('mysql2');
const sequelize = require('sequelize');

// utilize dotenv so we don't have to upload our password
require('dotenv').config();

// connect to database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: process.env.MYSQL_PASSWORD,
  database: 'main_db'
});

module.exports = connection;