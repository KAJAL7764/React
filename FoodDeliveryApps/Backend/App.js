import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import 'dotenv/config'
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRouter.js";
import cartRouter from "./routes/cartRouter.js";
import orderRouter from "./routes/orderRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// CORS
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/food", foodRouter);
// Serve uploaded images
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter);

// Only use JSON middleware when needed
app.use((req, res, next) => {
  if (req.is("application/json")) {
    express.json()(req, res, next);
  } else {
    next();
  }
});

// Connect to DB
connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to the Food Delivery App Backend!");
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
