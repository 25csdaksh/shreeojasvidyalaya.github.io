const express = require("express");
const Razorpay = require("razorpay");
const User = require("../models/User");
const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECRET
});

router.post("/create-order", async (req,res)=>{
  const order = await razorpay.orders.create({
    amount: 50000, // ₹500
    currency: "INR"
  });
  res.json(order);
});

// After payment success
router.post("/success", async (req,res)=>{
  await User.findByIdAndUpdate(req.body.userId,{paid:true});
  res.json({success:true});
});

module.exports = router;
