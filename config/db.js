const mongoose = require("mongoose");
const config = require("config");

// Database Connection URL
const db = config.get("mongoURI");

// Connect to Database

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log("Mongo DB Connection Successful");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
