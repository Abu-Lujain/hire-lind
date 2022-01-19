const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  company: {
    type: String,
  },
  location: {
    type: String,
  },
  website: {
    type: String,
  },
  gitHubUserName: {
    type: String,
  },
  role: {
    type: String,
    // required: true,
  },
  skills: [String],
  bio: {
    type: String,
  },
  experience: [
    {
      stillWorking: {
        type: Boolean,
        default: false,
      },
      description: {
        type: String,
      },
      title: {
        type: String,
        // required: true,
      },
      company: {
        type: String,
        // required: true,
      },
      location: {
        type: String,
      },
      from: {
        type: String,
      },
      to: {
        type: Date,
      },
    },
  ],

  social: [
    {
      facebook: {
        type: String,
      },
      youtube: {
        type: String,
      },
      linkedin: {
        type: String,
      },
      gitHub: {
        type: String,
      },
      twitter: {
        type: String,
      },
      instagram: {
        type: String,
      },
    },
  ],

  education: [
    {
      school: {
        type: String,
        required: true,
      },
      degree: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: false,
      },
      from: {
        type: Date,
        required: true,
      },
      to: {
        type: Date,
        required: true,
      },
    },
  ],
});
module.exports = mongoose.model("Profile", profileSchema);
