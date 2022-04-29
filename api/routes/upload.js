const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const path = require("path");
const multer = require("multer");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        cb(null,file.originalname);
    },
});

const upload = multer({ storage: storage });

    console.log(upload)

    
    router.post("/up", upload.single("uploaded_file"), (req, res) => {
        try {
            console.log(req)
            res.status(200).json("File uploded successfully");
        } catch (error) {
            console.error(error);
        }
    });

  router.post("/hello",(req,res)=>{
      res.send("post req")
  })


module.exports = router;
