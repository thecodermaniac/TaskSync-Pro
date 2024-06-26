const express = require("express");
const path = require("path");
require("dotenv").config();
const mongodbConnection = require("./config/db.js");

const app = express();

// Mongodb connection
mongodbConnection();

// Init middleware
app.use(express.json({ extended: false }));

// Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/boards", require("./routes/api/boards"));
app.use("/api/lists", require("./routes/api/lists"));
app.use("/api/cards", require("./routes/api/cards"));
app.use("/api/checklists", require("./routes/api/checklists"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log("Server started on port " + PORT));
