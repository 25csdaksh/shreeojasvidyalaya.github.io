const express = require("express");
const multer = require("multer");
const Notes = require("../models/Notes");
const router = express.Router();

const storage = multer.diskStorage({
  destination:"uploads/",
  filename:(req,file,cb)=>cb(null,Date.now()+file.originalname)
});
const upload = multer({storage});

// Upload PDF
router.post("/upload", upload.single("pdf"), async (req,res)=>{
  const note = await Notes.create({
    standard:req.body.standard,
    subject:req.body.subject,
    pdf:req.file.filename
  });
  res.json(note);
});

// Get Notes
router.get("/:std", async (req,res)=>{
  const notes = await Notes.find({standard:req.params.std});
  res.json(notes);
});

module.exports = router;
