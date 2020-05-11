const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  name: { type: String, required: true },
  ingredients: { type: String, required: true },
  image: { type: String, required: true },
});

module.exports = model("Dish", schema);
