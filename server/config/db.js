const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("(from ./config/db.js) MongoDB connected.");
  } catch (error) {
    console.error(error.message);
    //If there is a failure, we want to exit the process
    process.exit(1);
  }
};

module.exports = connectDB;
