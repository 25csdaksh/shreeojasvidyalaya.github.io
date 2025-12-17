const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema({
  standard: String,
  subject: String,
  pdf: String
});

module.exports = mongoose.model("Notes", NotesSchema);
