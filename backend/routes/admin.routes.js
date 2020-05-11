const { Router } = require("express");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const Dish = require("../models/Dish");

const auth = require("../middleware/auth.middleware");

const router = Router();

router.get("/all-user-load", auth, async (req, res) => {
  try {
    // console.log("ddddddddddd");
    const UserListe = await User.find();

    // console.log(UserListe);

    res.json({
      UserListe,
    });
  } catch (e) {
    res.status(500).json({ message: "Ein Feler ist aufgetreten" });
  }
});

router.post("/new-dish-add", auth, async (req, res) => {
  try {
    console.log("ccccccccccccccccccc");
    const { name, ingredients, image } = req.body;
    console.log(name, ingredients, image);
    const dish = new Dish({
      name,
      ingredients,
      image,
    });

    await dish.save();
    res.json({
      //   UserListe,
    });
  } catch (e) {
    res.status(500).json({ message: "Ein Feler ist aufgetreten" });
  }
});

module.exports = router;
