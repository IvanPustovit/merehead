const mongoose = require("mongoose");
require("dotenv").config();

async function connectDB() {
  try {
    await mongoose.connect(process.env.CONNECTION_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.info("Database connect successful");
  } catch (error) {
    console.log("No connect DB", error);
    process.exit(1);
  }
}

module.exports = connectDB;