const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const User = require("../Models/User");

// @route   GET    api/auth
// @desc    Get Logged in User
// @access  Private
router.get("/", (req, res) => {
  res.send("Get Logged in User");
});

// @route   POST    api/auth
// @desc    Auth User & Get Token
// @access  Public
router.post(
  "/",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a password").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ msg: "Incorrect Password" });
      }

      // JWT Creation
      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 3600
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ msg: "Internal Server Error" });
    }
  }
);

module.exports = router;
