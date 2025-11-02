import express from "express";
import { addSong, listSong } from "../controllers/songControllers.js";
import upload from "../middleware/multer.js";
const router = express.Router();

// multiple file fields
router.post(
  "/add",
  upload.fields([
    { name: "audio", maxCount: 1 },
    { name: "image", maxCount: 1 },
  ]),
  (req, res, next) => {
    console.log("✅ Route Hit:", req.body);
    next();
  },
  addSong
);


router.get("/list", listSong);

export default router;
