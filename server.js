const { default: mongoose } = require("mongoose");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

MONGODB_URI = process.env.MONGODB_URI;
console.log("MONGODB_URI", MONGODB_URI);
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
