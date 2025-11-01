import { addSong,listSong } from "../controllers/songControllers.js";
import express from 'express'

const songRouter = express.Router();

songRouter.post('/add',addSong)
songRouter.post('/list',listSong)

export default songRouter