const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const providerRoutes = require("./routes/provider");
const userRoutes = require("./routes/user");

const app = express();

const MONGO_URI = process.env.MONGO_URI || `mongodb+srv://chetanprakashshama:demo123@cluster0.dr6kt.mongodb.net/demo`;

app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

// API Routes
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/provider", providerRoutes);
app.use("/user", userRoutes);

// Serve React frontend (build folder)
const frontendPath = path.join(__dirname, "../job-frontend/build");
app.use(express.static(frontendPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Error handler
app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;

  res.status(status).json({ message, data });
});

// Connect DB and Start Server
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Database");
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
