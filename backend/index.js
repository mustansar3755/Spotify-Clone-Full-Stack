import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import songRouter from "./src/routes/songRouter.js";
import connectDB from "./src/config/db.js";
import connectCloudinary from "./src/config/cloudinary.js";

// App config
const app = express();
const PORT = process.env.PORT || 4000;

// Connect Database and Cloudinary
connectDB();
connectCloudinary();

// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" })); // ✅ handles large uploads safely

// Routes
app.use("/api/song", songRouter);

// Default Route
app.get("/", (req, res) => res.send("🎵 API is Working!"));

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server started on http://localhost:${PORT}`);
});
