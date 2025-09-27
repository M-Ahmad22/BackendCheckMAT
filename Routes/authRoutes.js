const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../Controllers/authController");

// Register route
router.post("/register", registerUser);

// Login route
router.post("/login", loginUser);

// (Optional) Get all users for admin
router.get("/users", async (req, res) => {
  const User = require("../Models/User");
  const users = await User.find().select("-password");
  res.json(users);
});

router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
