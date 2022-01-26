const mongoose = require("mongoose");
const comapySchema = mongoose.Schema({
  name: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  loc: {
    type: String,
  },
  email: {
    type: String,
  },
  area: {
    type: String,
  },
  products: {
    type: Array,
  },
  services: {
    type: Array,
  },
  foundedYear: {
    type: Date,
  },
  logo: {
    type: String,
  },
  jobs: {
    type: Array,
  },
  about: {
    type: String,
  },
  website: {
    type: String,
  },
});
module.exports = mongoose.model("Company", comapySchema);
