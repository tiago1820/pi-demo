const { Router } = require("express");
const { getUsersHandler, getDetailHandler, createUserHandler } = require("../handles/usersHandler");

const usersRouter = Router();

usersRouter.get('/', getUsersHandler);

usersRouter.get('/:id', getDetailHandler);

usersRouter.post('/', createUserHandler);

module.exports = usersRouter;