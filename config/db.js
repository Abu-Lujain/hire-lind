const mongoose = require("mongoose");
const config = require("config");
const express = require("express");

const db = config.get("mongoURI");
const connentDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("db connected");
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};
module.exports = connentDB;
