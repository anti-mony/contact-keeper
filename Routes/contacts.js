const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Contact = require("../Models/Contact");
const User = require("../Models/User");

const auth = require("../Middleware/auth");

// @route   GET    api/contacts
// @desc    Get All User's Contacts
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(contacts);
  } catch (error) {
    console.error(err.message);
    res.send(500).json({ msg: "Internal Server Error" });
  }
});

// @route   POST    api/contacts
// @desc    Add New Private
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      check("name", "Name is Required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id
      });

      const contact = await newContact.save();

      return res.json(contact);
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ msg: "Internal Server Error" });
    }
  }
);

// @route   PUT    api/contacts/:id
// @desc    Update Contact
// @access  Private
router.put("/:id", auth, async (req, res) => {
  const { name, email, phone, type } = req.body;

  // Updated Contact Object
  const constantFields = {};
  if (name) constantFields.name = name;
  if (email) constantFields.email = email;
  if (phone) constantFields.phone = phone;
  if (type) constantFields.type = type;

  try {
    let contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ msg: "Contact Not Found" });

    // Make Sure User Owns Contact
    if (contact.user.toString() != req.user.id) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      {
        $set: constantFields
      },
      { new: true }
    );
    res.json(contact);
  } catch (error) {
    console.error(err.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

// @route   DELETE    api/contacts/:id
// @desc    Update Contact
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ msg: "Contact Not Found" });

    // Make Sure User Owns Contact
    if (contact.user.toString() != req.user.id) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    await Contact.findByIdAndRemove(req.params.id);

    res.json({ msg: "Contact Deleted Successfully" });
  } catch (error) {
    console.error(err.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

module.exports = router;
