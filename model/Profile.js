const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  company: {
    type: String,
  },
  loc: {
    type: String,
  },
  website: {
    type: String,
  },
  gitHubUserName: {
    type: String,
  },
  title: {
    type: String,
    // required: true,
  },
  bio: {
    type: String,
  },
  photo: {
    type: String,
    default: "uploadsphoto-4Carrer-1643102875295.jpeg",
  },
  skills: [String],

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
        required: true,
      },
      loc: {
        type: String,
        required: true,
      },
      company: {
        type: String,
        required: true,
      },
      from: {
        type: String,
        required: true,
      },
      to: {
        type: Date,
      },
      project: {
        type: Array,
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
      loc: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        // max: 20,
      },
      from: {
        type: Date,
        required: true,
      },
      to: {
        type: Date,
      },
    },
  ],
});
module.exports = mongoose.model("Profile", profileSchema);
