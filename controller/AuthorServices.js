const { Author } = require("../model/author");

module.exports = class AuthorServices {
  createAuthor = async (req, res) => {
    const findAuthor = await Author.findOne({ isbn: req.body.email });
    if (findAuthor)
      return res
        .status(404)
        .json({ message: "Author already exist", status: false });

    try {
      await Author.create({
        email: req.body.email,
        name: req.body.name,
        address: req.body.address,
        number: req.body.number,
        photo: req.body.photo,
      });

      return res.status(201).json({ message: "Author created", status: true });
    } catch (error) {
      console.error("error: author", error.message);
    }
  };

  getAuthor = async (req, res) => {
    const foundAuthors = await Author.aggregate([
      {
        $match: { _id: { $exists: true } },
      },
    ]);

    if (foundAuthors.length < 1)
      return res
        .status(404)
        .json({ message: "No Authors at the moment", status: false });
    return res.status(200).json({ data: foundAuthors, status: true });
  };
};
