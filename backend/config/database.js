const mongoose = require("mongoose");

const DB = mongoose
  .connect(
    process.env.DATABASE.replace("<password>", process.env.DATABASE_PASSWORD)
  )
  .then(() => {
    console.log("DB CONNECTION SUCCESSFUL!");
  });
