const mongoose = require("mongoose");

const personSchema = mongoose.Schema({
  userName: {
    required: true,
    type: String,
  },
  age: {
    required: true,
    type: Number,
  },
});

module.exports = mongoose.model("Person", personSchema);
