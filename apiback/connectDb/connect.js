const mongoose = require("mongoose");
const url_db =
  "mongodb+srv://Hamza:55150545@cluster0.ul8j1cx.mongodb.net/?retryWrites=true&w=majority";
const connectDb = async () => {
  try {
    await mongoose.connect(url_db);
    console.log("Connected to db");
  } catch (error) {
    console.log("connection with data base is failed");
  }
};

module.exports = connectDb;
