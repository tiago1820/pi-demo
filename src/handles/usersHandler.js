const { createUserDB } = require("../controllers/userController");

const getUsersHandler = (req, res) => {
    const { name, race } = req.query;
    if (name) res.status(200).send(`Aqui estan todos los usuarios ${name}`);
    res.status(200).send(`Todos los usuarios`);
};

const getDetailHandler = (req, res) => {
    const { id } = req.params

    res.status(200).send(`Detalle del usuario ${id}`);
};

const createUserHandler = async (req, res) => {
    const { name, email, phone } = req.body;

    try {
        const response = await createUserDB(name, email, phone);
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

    res.status(200).send(`Usuario ${name} creado con el email ${email}`);
};


// /:id => parans
// query ----> ?name=name&raza=raza
// body ---> info
module.exports = {
    getDetailHandler,
    getUsersHandler,
    createUserHandler,
};