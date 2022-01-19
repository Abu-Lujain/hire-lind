const mongoose = require("mongoose");
const comapySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    length: 30,
  },
  location: {
    type: String,
    required: true,
    length: 20,
  },
  area: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});
