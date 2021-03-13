require('dotenv').config();
const env = process.env;

const development = {
  username: env.NAME,
  password: env.PASSWORD,
  database: env.DATABASE,
  host: env.HOST,
  dialect: 'mysql',
};

const production = {
  username: env.USERNAME,
  password: env.PASSWORD,
  database: env.DATABASE,
  host: env.HOST,
  dialect: 'mysql',
};

const test = {
  username: env.USERNAME,
  password: env.PASSWORD,
  database: env.DATABASE_TEST,
  host: env.HOST,
  dialect: 'mysql',
};

module.exports = { development, production, test };
