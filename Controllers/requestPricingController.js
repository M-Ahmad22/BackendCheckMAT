const RequestPricing = require("../Models/RequestPricing");

// Create new request pricing
exports.createRequest = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ message: "Name, email, and message are required." });
    }

    const newRequest = new RequestPricing({ name, email, phone, message });
    await newRequest.save();

    res
      .status(201)
      .json({ message: "Request submitted successfully", data: newRequest });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getRequests = async (req, res) => {
  try {
    const requests = await RequestPricing.find().sort({ createdAt: -1 });
    res.status(200).json(requests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
