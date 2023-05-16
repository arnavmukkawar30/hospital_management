var mongoose = require("mongoose");
require("dotenv").config();

mongoose.Promise = global.Promise;

//change the database with yours
// mongoose.connect("mongodb://localhost:27017/hospitaldb");
const uri = process.env.URI;

mongoose
  .connect(uri)
  .then(() => {
    console.log("database connected");
  })
  .catch((e) => console.log(e));

module.exports = { mongoose };
