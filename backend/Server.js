const express = require("express");
const cors = require("cors");
const Connection = require("./database/ConnectionTOMongo");
require("dotenv").config();

const app = express();
// const PORT = process.env.PORT || 5000;



// Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

// Routes
app.use("/api/auth", require("./Routes/Auth"));


// ✅ Import login routes separately
app.use("/api/auth", require("./Routes/Login"));  // Add this line

// Connect to MongoDB
Connection();

// Start Server
app.listen(process.env.Port, () => console.log(`Server running on port ${process.env.Port}`));
