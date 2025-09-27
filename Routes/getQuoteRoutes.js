const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { getQuote, getAllQuotes } = require("../Controllers/getQuoteController");
const Quote = require("../Models/Quote");

router.post("/get-quote", upload.single("document"), getQuote);
router.get("/get-quote", getAllQuotes);

router.patch("/get-quote/:id/read", async (req, res) => {
  try {
    const updated = await Quote.findByIdAndUpdate(
      req.params.id,
      { status: "read" },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Error updating status" });
  }
});

module.exports = router;
