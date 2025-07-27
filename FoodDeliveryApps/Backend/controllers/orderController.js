import orderModel from "../model/orderModel.js";
import userModel from "../model/userModel.js"
import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create Stripe Checkout Session
export const placeOrder = async (req, res) => {
const frontend_url = "http://localhost:5173";

  try {
    const newOrder = new orderModel({
        userId: req.body.userId, 
        items: req.body.items,
        amount:req.body.amount,
        address:req.body.address
    })
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, {cartData:{}})    ;

const line_items = req.body.items.map((item)=> ({
price_data: {
    currency:"inr",
    product_data:{
        name:item.name
    },
   unit_amount: Math.round(item.price * 100 * 80)

},
quantity:item.quantity
}))
  
  line_items.push({
    price_data:{
        currency:"inr",
        product_data:{
            name:"Delivery Charges"
        },
        unit_amount: Math.round(2 * 100 * 80)

    },
    quantity:1
  }) 
  
  if (!req.body.userId || !req.body.items || !req.body.amount || !req.body.address) {
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }
  

  const session = await stripe.checkout.sessions.create({
    line_items:line_items,
    mode:'payment',
    success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
    cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
  })

  res.json({success:true, session_url:session.url})
  } 
  
  
  catch (err) {
    console.log("Stripe Error:", err.message);
    res.status(500).json({ success: false, message: "Stripe session error" });
  }
}


export const verifyOrder = async (req, res) => {
const {orderId, success} = req.body;

try {

  if (success == "true") {
    await orderModel.findByIdAndUpdate(orderId, { payment: true });
    res.json({ success: true, message: "Payment Successful" });
  } else {
    await orderModel.findByIdAndDelete(orderId);
    res.json({ success: false, message: "Payment Cancelled" });
  }
  
  
} catch (error) {
  console.log(error);
  res.json({success:false, message:"Error"})
}

}



//user orders for frontend 

export const userOrders = async (req, res) => {
try {

  const orders = await orderModel.find({userId:req.body.userId})
  res.json({success:true, data:orders});
  
} catch (error) {
  console.log(error)
  res.json({success:false, message:"Error"});
}
}