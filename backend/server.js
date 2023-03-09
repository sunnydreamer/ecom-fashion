const express = require("express");
const app = express();
const userRouter = require("./routes/api/users");

require("dotenv").config();
require("./config/database");

app.use(express.json());
app.use("/api/users", userRouter);
app.all("*", (request, response) => {
  response.send("Undefined route");
});

// Connect to PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});