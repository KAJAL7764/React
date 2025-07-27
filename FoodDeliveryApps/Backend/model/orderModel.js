import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    ref: "users"
  },
  items: {
    type: Array,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  address: {
    type: Object,
    required: true
  },

  status: {
    type: String,
    default: "placed",
    enum: ["placed", "processing", "dispatched", "delivered", "cancelled"]
  },
date  : {
    type: Date,
    default: Date.now
  },
    payment: {
    type: Boolean,
   default: false,
    required: true
  },
});

const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);
export default orderModel;
