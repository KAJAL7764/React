import userModel from "../model/userModel.js";

//add items to user cart

const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findById({ _id: req.body.userId });
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Added To Cart" });
  } catch (error) {
    console.error("Error in addToCart:", error);
    res.json({ success: false, message: error.message || "Error" });
  }
};

//renove item from user cart
const removeCart = async (req, res) => {
  try {
    let userData = await userModel.findById({ _id: req.body.userId });
    let cartData = await userData.cartData;
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;

      await userModel.findByIdAndUpdate(req.body.userId, { cartData });
      res.json({ success: true, message: "Remove from cart" });
    }
  } catch (error) {
    console.error("Error in removeCart:", error);
    res.json({ success: false, message: error.message || "Error" });
  }
};

//fetch user cart data

const getCart = async (req, res) => {
  try {
    console.log(req.body.userId);

    const user = await userModel.findOne({ _id: req.body.userId });

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    const cartData = user.cartData || {};
    res.json({ success: true, cartData });
  } catch (error) {
    console.error("Error in getCart:", error);
    res.json({ success: false, message: error.message || "Error" });
  }
};

export { addToCart, removeCart, getCart };
