const { default: mongoose } = require("mongoose");
const { CoreModel } = require("./coreModel");

const Author = new mongoose.Schema({
  email: { type: "string", required: true, unique: true },
  address: { type: String, required: true, trim: true },
  number: { type: String, required: true, trim: true },
});

module.exports.Author = CoreModel.discriminator("author", Author);
