const AuthorServices = require("../controller/AuthorServices");
const AuthorRouter = require("express").Router();
const author = new AuthorServices();

AuthorRouter.route("/author").post(author.createAuthor).get(author.getAuthor);

module.exports = { AuthorRouter };
