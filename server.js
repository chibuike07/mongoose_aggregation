const { default: mongoose } = require("mongoose");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { AuthorRouter } = require("./routes/authorServices");
const { BookRouter } = require("./routes/booksServices");
const { FollowerRouter } = require("./routes/followerService");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use("/api/v1/", AuthorRouter);
app.use("/api/v1/", BookRouter);
app.use("/api/v1/", FollowerRouter);

MONGODB_URI = process.env.MONGODB_URI;
PORT = process.env.PORT;
MONGOOSE_OPTIONS = {
  useUnifiedTopology: true,
};

mongoose.connect(MONGODB_URI, MONGOOSE_OPTIONS).then((res) => {
  console.log("database connection established");
  app.listen(PORT, () => {
    console.log(`server listening on port:${PORT}`);
  });
});
