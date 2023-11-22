const axios = require('axios');
const { Post } = require('../db');

const infoCleaner = require('../utils');

const { User } = require('../db');

const createUserDB = async (name, email, phone) => {
    return await User.create({ name, email, phone });
};

const getUserById = async (id, source) => {
    const user = source === 'api'
        ? (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data
        : await User.findByPk(id, {
            include: {
                model: Post,
                attributes: ['title', 'body'],
            },
        });

    return user;
};

const getAllUsers = async () => {
    const usersDB = await User.findAll();

    const infoApi = (await axios.get('https://jsonplaceholder.typicode.com/users/')).data;

    const usersApi = infoCleaner(infoApi);

    return [...usersDB, ...usersApi]
};

const getUserByName = async (name) => {
    const infoApi = (await axios.get('https://jsonplaceholder.typicode.com/users/')).data;
    const usersApi = infoCleaner(infoApi);

    const usersFiltered = usersApi.filter(user => user.name === name);

    const userDb = await User.findAll({ where: { name: name } });

    return [...usersFiltered, ...userDb]

};


module.exports = { createUserDB, getUserById, getAllUsers, getUserByName };