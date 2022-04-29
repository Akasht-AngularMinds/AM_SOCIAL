const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const router = express.Router();
const path = require("path");
const uploadRoute = require("./routes/upload.js");

dotenv.config();
console.log(process.env.MONGO_URL)

let conn=mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);
console.log(conn)
app.use("/images", express.static(path.join(__dirname, "public/images")));


//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

 


app.use("/api/upload",uploadRoute)


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(8080,() => {
  console.log("Backend server is running!");
});
