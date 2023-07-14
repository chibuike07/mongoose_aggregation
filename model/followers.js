const { default: mongoose } = require("mongoose");

const Followers = new mongoose.Schema({
  author: { type: mongoose.Types.ObjectId, ref: "author", required: true },
  fans: { type: mongoose.Types.ObjectId, ref: "author", required: true },
  comment: { type: String, required: true, trim: true },
});

module.exports.Followers = mongoose.model("followers", Followers);
