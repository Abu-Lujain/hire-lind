const mongoose = require("mongoose");
const jobSchema = mongoose.Schema(
  [
    {
      company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
      companyName: {
        type: String,
      },
      title: {
        type: String,
        required: true,
      },
      stillVacant: {
        type: String,
        default: true,
      },
      perks: {
        type: [String],
      },
      industry: {
        type: String,
        required: true,
      },
      salary: {
        type: Number,
        required: true,
      },

      shift: {
        type: String,
        required: true,
      },
      experienceRequired: {
        type: String,
        required: true,
      },
      recruitmentProcess: {
        type: String,
        required: true,
      },

      description: {
        type: String,
        required: true,
      },
    },
  ],
  { timestamps: true }
)
module.exports = Job = mongoose.model("Job", jobSchema)
