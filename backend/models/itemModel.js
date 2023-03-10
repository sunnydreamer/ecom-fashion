const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Each item must have a name"],
  },
  category: {
    type: String,
  },
  picture: {
    type: String,
  },
  color: {
    type: String,
  },
  tags: {
    type: Array,
    default: [""],
  },
  size: {
    type: String,
    enum: {
      values: ["S", "M", "L", "XL"],
    },
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
