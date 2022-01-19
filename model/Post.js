const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
  userName: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  title: {
    type: String,
    required: true,
  },
  postBody: {
    type: String,
    required: true,
  },

  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
      body: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  likes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
      // number: {
      //   type: Number,
      // },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = Post = mongoose.model("Post", postSchema);
