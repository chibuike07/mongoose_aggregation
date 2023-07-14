const { default: mongoose } = require("mongoose");
const { CoreModel } = require("./coreModel");

const Books = new mongoose.Schema({
  isbn: { type: String, required: true, trim: true, unique: true },
  author: { type: mongoose.Types.ObjectId, ref: "author", required: true },
});

module.exports.Books = CoreModel.discriminator("books", Books);
