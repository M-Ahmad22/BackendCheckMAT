const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNo: { type: String, required: true },
    startUpName: { type: String },
    service: { type: String },
    budget: { type: String },
    projectTimeline: { type: String },
    projectDescription: { type: String },
    document: { type: String },
    status: {
      type: String,
      enum: ["unread", "read"],
      default: "unread",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quote", quoteSchema);
