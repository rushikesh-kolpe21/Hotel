const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuSchema = new Schema({
  name: String,
  price: Number,
  category: String,
  description: String,
//   image: String
}, { timestamps: true });

const MenuModel = mongoose.model("Menu", MenuSchema);
module.exports = MenuModel;