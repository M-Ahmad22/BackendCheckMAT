const BookCall = require("../Models/BookCall");

const bookCall = async (req, res) => {
  try {
    const {
      fullName,
      email,
      projectBrief,
      selectedDate,
      selectedTime,
      timezone,
    } = req.body;

    if (
      !fullName ||
      !email ||
      !projectBrief ||
      !selectedDate ||
      !selectedTime
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newBooking = new BookCall({
      fullName,
      email,
      projectBrief,
      selectedDate,
      selectedTime,
      timezone,
    });

    await newBooking.save();

    return res.status(200).json({ message: "Your meeting has been booked!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error. Try again." });
  }
};

const getAllBookings = async (req, res) => {
  try {
    const bookings = await BookCall.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = { bookCall, getAllBookings };
