const express = require("express");
const router = express.Router();
const {
  createRequest,
  getRequests,
} = require("../Controllers/requestPricingController");
const RequestPricing = require("../Models/RequestPricing");

router.post("/", createRequest);
router.get("/", getRequests);
router.patch("/:id/read", async (req, res) => {
  try {
    const updated = await RequestPricing.findByIdAndUpdate(
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
