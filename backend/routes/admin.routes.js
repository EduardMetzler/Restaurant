const { Router } = require("express");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const auth = require("../middleware/auth.middleware");

const router = Router();

router.get("/all-user-load", auth, async (req, res) => {
  try {
    console.log("ddddddddddd");
    const UserListe = await User.find();

    console.log(UserListe);

    res.json({
      UserListe,
    });
  } catch (e) {
    res.status(500).json({ message: "Ein Feler ist aufgetreten" });
  }
});

module.exports = router;
