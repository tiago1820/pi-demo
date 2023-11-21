const { Sequelize } = require("sequelize");
require('dotent').config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;


const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    { logging: false }
);


module.exports = {
    conn: sequelize
}