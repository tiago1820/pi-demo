const { Router } = require("express");

const { createPostHandler } = require('../handles/postHandler');

const postsRouter = Router();

postsRouter.post('/', createPostHandler);

module.exports = postsRouter;