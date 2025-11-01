import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import cors from 'cors'
import songRouter from './src/routes/songRouter.js';
import connectDB from './src/config/db.js';
import connectCloudinary from './src/config/cloudinary.js';


const PORT = process.env.PORT || 4000;
// App config
const app = express();
connectDB();
connectCloudinary()

// middleware
app.use(express.json())
app.use(cors());

// intilize route

app.use('/api/song',songRouter);

app.get('/',(req,res)=>res.send("API Working"));

app.listen(PORT,()=>{
    console.log('Server Started At PORT NO:',PORT);
})