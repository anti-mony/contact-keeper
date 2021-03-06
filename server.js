const express = require("express");
const connectDB = require("./config/db");
const app = express();
const path = require("path");

//Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Routes
app.use("/api/users", require("./Routes/users"));
app.use("/api/auth", require("./Routes/auth"));
app.use("/api/contacts", require("./Routes/contacts"));

// Serve Static
if (process.env.NODE_ENV == "production") {
  // Set Static Folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
