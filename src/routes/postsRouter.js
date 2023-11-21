const { Router } = require("express");

const { createPostHandler } = require('../handles/postHandler');

const postsRouter = Router();

postsRouter.post("/", (req, res) => {
    res.status(200).send("Crear un post");
});

module.exports = postsRouter;