const express = require("express");
const router = express.Router();
const {
  bookCall,
  getAllBookings,
} = require("../Controllers/bookCallController");
const BookCall = require("../Models/BookCall");

router.post("/book-call", bookCall);
router.get("/book-call", getAllBookings);
router.patch("/book-call/:id/read", async (req, res) => {
  try {
    const updated = await BookCall.findByIdAndUpdate(
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
