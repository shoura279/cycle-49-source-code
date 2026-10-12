const { Sequelize } = require('sequelize');

// establish connect to DB
const sequelize = new Sequelize('blog_ORM_C49_1', 'root', '', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
});


module.exports = { sequelize };