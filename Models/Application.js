const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  linkedin: { type: String },
  githubPortfolio: { type: String },
  location: { type: String, required: true },
  salary: { type: String },
  availability: { type: String },
  experience: { type: String },
  jobType: { type: String },
  jobTitle: { type: String },
  jobId: { type: String },
  resume: { type: String, required: true },
  coverLetter: { type: String },
  createdAt: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["unread", "read"],
    default: "unread",
  },
});

module.exports = mongoose.model("Application", applicationSchema);
