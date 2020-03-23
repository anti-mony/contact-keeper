const express = require("express");

const router = express.Router();

// @route   GET    api/auth
// @desc    Get Logged in User
// @access  Private
router.get("/", (req, res) => {
  res.send("Get Logged in User");
});

// @route   POST    api/auth
// @desc    Auth User & Get Token
// @access  Public
router.post("/", (req, res) => {
  res.send("Log in User");
});

module.exports = router;
