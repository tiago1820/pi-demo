require('dotenv').config();
const { Sequelize, DataTypes } = require("sequelize");

// importacion de los modelos
const UsersModel = require('./models/UsersModel');
const PostModel = require('./models/PostsModel');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;


const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    { logging: false }
);

// definicion de modelos
UsersModel(sequelize);
PostModel(sequelize);

// Crear las relaciones
const { User, Post } = sequelize.models;

// Un usuario puede tener muchos posts
User.hasMany(Post);
// Un post pertenece a un solo usuario
Post.belongsTo(User);


module.exports = {
    ...sequelize.models,
    conn: sequelize
}