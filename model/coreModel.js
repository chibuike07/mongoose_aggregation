const { default: mongoose } = require("mongoose");

const CoreModel = new mongoose.Schema(
  {
    name: { type: String, trim: true, unique: true, required: true },
    photo: { type: String, trim: true, unique: true, required: true },
  },
  { discriminatorKey: "identity", timestamp: true }
);

module.exports.CoreModel = mongoose.model("coreModel", CoreModel);
