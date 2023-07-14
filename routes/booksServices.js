const BookServices = require("../controller/BooksServices");
const BookRouter = require("express").Router();
const book = new BookServices();

BookRouter.route("/books").post(book.createBook).get(book.getBooksByAuthor);

BookRouter.get("/authors_books", book.getBooksByAuthors);

module.exports = { BookRouter };
