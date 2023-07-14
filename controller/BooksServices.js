const { default: mongoose } = require("mongoose");
const { Books } = require("../model/books");
const { Author } = require("../model/author");

module.exports = class BookServices {
  createBook = async (req, res) => {
    const findBooks = await Books.findOne({ isbn: req.body.isbn });
    if (findBooks)
      return res
        .status(404)
        .json({ message: "This book already exist", status: false });

    try {
      await Books.create({
        name: req.body.name,
        photo: req.body.photo,
        isbn: req.body.isbn,
        author: req.body.author,
      });

      return res.status(201).json({ message: "book created", status: true });
    } catch (error) {
      console.error("error: book", error.message);
    }
  };

  getBooksByAuthor = async (req, res) => {
    const foundBooks = await Author.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(req.query?.id) },
      },
      {
        $lookup: {
          from: "coremodels",
          localField: "_id",
          foreignField: "author",
          as: "authorsBook",
        },
      },

      {
        $project: {
          authorsBooks: "$authorsBook",
        },
      },
    ]);
    if (foundBooks.length < 1)
      return res
        .status(404)
        .json({ message: "No books at the moment", status: false });
    return res.status(200).json({ data: foundBooks, status: true });
  };

  getBooksByAuthors = async (req, res) => {
    const foundBooks = await Author.aggregate([
      {
        $lookup: {
          from: "coremodels",
          localField: "_id",
          foreignField: "author",
          as: "authorsBook",
        },
      },
      {
        $group: {
          _id: "$_id",
          name: { $first: "$name" },
          authorsBooks: { $first: "$authorsBook" },
        },
      },

      {
        $lookup: {
          from: "followers",
          localField: "_id",
          foreignField: "author",
          as: "followers",
        },
      },
    ]);
    if (foundBooks.length < 1)
      return res
        .status(404)
        .json({ message: "No books at the moment", status: false });
    return res.status(200).json({ data: foundBooks, status: true });
  };
};
