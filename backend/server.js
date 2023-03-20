require("dotenv").config();

const express = require("express");
const app = express();
const userRouter = require("./routes/api/users");
const itemRouter = require("./routes/api/items");
const checkoutRouter = require("./routes/api/checkout");

// IMPORT CORS
const cors = require("cors");

const mongoose = require("mongoose");

// require("./config/database");

// console.log(process.env.DATABASE);
const DB = mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB CONNECTION SUCCESSFUL!");
  })
  .catch((error) => console.error(error.message));

// middleware to set the Access-Control-Allow-Origin header
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // allow requests from any domain
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// cors
app.use(
  cors({
    origin: ["https://localhost:3000", "https://everlanefe.onrender.com"],
  })
);
app.use(express.static("public"));
app.use(express.json());

// route
app.use("/api/users", userRouter);
app.use("/api/items", itemRouter);
app.use("/checkout", checkoutRouter);

app.all("*", (request, response) => {
  response.send("Undefined route");
});

// Connect to PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
