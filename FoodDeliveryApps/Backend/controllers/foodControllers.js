import { foodModel } from "../model/foodModel.js";
import fs from "fs";
import path from "path";


const addFood = async (req, res) => {
  try {
    console.log("📦 Received body:", req.body);
    console.log("🖼️ Received file:", req.file);

    if (!req.file) {
      return res.status(400).json({ success: false, message: "Image file is missing" });
    }

    const price = Number(req.body.price);
    if (isNaN(price)) {
      return res.status(400).json({ success: false, message: "Invalid price value" });
    }

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: price,
      category: req.body.category,
      image: image_filename,
    });

    console.log("🧾 Saving food object:", food);
    await food.save();

    res.status(201).json({ message: "Food added successfully", success: true, food });
  } catch (error) {
    console.error("🔥 Backend Error:", error);
    res.status(500).json({ message: error.message });
  }
};


//all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find();
    res.status(200).json({ success: true, data: foods });
  } catch (error) {
    res.status(500).json({ success: false, message: "Food not found" });
  }
};

//remove food item

const removeFood = async (req, res) => {                          
  try {
    const food = await foodModel.findById(req.body.id);
    if (!food) {
      return res.status(404).json({ success: false, message: "Food not found" });
    }

    // Delete image if it exists
    if (food.image) {
      fs.unlink(`uploads/${food.image}`, (err) => {
        if (err) console.error("Failed to delete image:", err);
      });
    }

    // Delete from DB
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food removed" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

  
export { addFood, listFood, removeFood };
