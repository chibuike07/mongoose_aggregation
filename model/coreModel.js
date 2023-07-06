const { default: mongoose } = require("mongoose");

const CoreModel = new mongoose.Schema(
  {
    name: { type: String, trim: true, unique: true },
    photo: { type: String, trim: true, unique: true },
  },
  { discriminatorKey: "identity", timestamp: true }
);

module.exports.CoreModel = mongoose.model("coreModel", CoreModel);
