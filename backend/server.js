const express = require("express");
const app = express();
const userRouter = require("./routes/api/users");
const itemRouter = require("./routes/api/items");

// IMPORT CORS
const cors = require("cors");

require("dotenv").config();
require("./config/database");

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
    origin: ["https://localhost:3000"],
  })
);

app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/items", itemRouter);

app.all("*", (request, response) => {
  response.send("Undefined route");
});

// Connect to PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
