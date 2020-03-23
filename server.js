const express = require("express");

const app = express();

app.get("/", (req, res) => res.send({ msg: "Welcome, I hope you're happy" }));

// Routes
app.use("/api/users", require("./Routes/users"));
app.use("/api/auth", require("./Routes/auth"));
app.use("/api/contacts", require("./Routes/contacts"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
