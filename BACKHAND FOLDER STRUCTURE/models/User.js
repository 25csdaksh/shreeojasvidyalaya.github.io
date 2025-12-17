const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, default: "student" },
  paid: { type: Boolean, default: false }
});

module.exports = mongoose.model("User", UserSchema);