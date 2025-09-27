const Quote = require("../Models/Quote");

const getQuote = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phoneNo,
      startUpName,
      service,
      budget,
      projectTimeline,
      projectDescription,
    } = req.body;

    const document = req.file ? req.file.path : null;

    const newQuote = new Quote({
      fullName,
      email,
      phoneNo,
      startUpName,
      service,
      budget,
      projectTimeline,
      projectDescription,
      document,
    });

    await newQuote.save();
    res.status(200).json({ message: "Quote request submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getAllQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ createdAt: -1 });
    res.json(quotes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getQuote, getAllQuotes };
