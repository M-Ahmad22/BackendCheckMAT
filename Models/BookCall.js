const mongoose = require("mongoose");

const BookCallSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    projectBrief: {
      type: String,
      required: true,
    },
    selectedDate: {
      type: String, // store as "YYYY-MM-DD"
      required: true,
    },
    selectedTime: {
      type: String, // e.g., "10:00 AM"
      required: true,
    },
    timezone: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["unread", "read"],
      default: "unread",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BookCall", BookCallSchema);
