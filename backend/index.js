const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const booksRoute = require("./routes/booksRoute.js");
require("dotenv").config();

const app = express();
const PORT = 5555;

//middleware for parsing request body
app.use(express.json());

//enable cross-origin access control
app.use(cors());

mongoose.set("strictQuery", false);

app.use("/books", booksRoute);

mongoose
  .connect(process.env.mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
