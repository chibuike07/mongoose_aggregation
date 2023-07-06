const Books = new mongoose.Schema({
  title: { type: String, required: true, trim: true, unique: true },
});
