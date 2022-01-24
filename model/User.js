const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = User = mongoose.model("user" /*ref*/, userSchema);
