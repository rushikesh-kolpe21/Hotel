const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuSchema = new Schema({
  name: String,
  price: Number,
  category: String,
  description: String,
  image: String
}, { timestamps: true });

module.exports = mongoose.model("Menu", MenuSchema);
