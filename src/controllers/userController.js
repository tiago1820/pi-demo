const { User } = require('../db');

const createUserDB = async (name, email, phone) => {
    return await User.create({ name, email, phone });
};


module.exports = { createUserDB };