const express = require("express");
const router = express.Router();
const Menu = require("../Models/Menu");

// GET all menu
router.get("/", async (req, res) => {
  try {
    const items = await Menu.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

// ADD menu item (admin)
// router.post("/", async (req, res) => {
//   try {
//     const { name, price, category, description } = req.body;
//     if (!name || !price) return res.status(400).json({ error: "name & price required" });

//     const newItem = new Menu({ name, price, category, description });
//     await newItem.save();

//     res.status(201).json(newItem);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to add menu item" });
//   }
// });

module.exports = router;
