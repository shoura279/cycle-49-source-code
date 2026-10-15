import { Sequelize } from 'sequelize';

// establish connect to DB
export const sequelize = new Sequelize('blog_orm_c49_1', 'root', '', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
});


// module.exports = { sequelize };