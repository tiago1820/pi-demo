const { Router } = require("express");

const postsRouter = Router();


postsRouter.post("/", (req, res) => {
    res.status(200).send("Crear un post");
});

module.exports = postsRouter;