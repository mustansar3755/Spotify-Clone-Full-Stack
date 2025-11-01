import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import cors from 'cors'

const PORT = process.env.PORT || 4000;
// App config
const app = express();

// middleware
app.use(express.json())
app.use(cors());

// intilize route

app.get('/',(req,res)=>res.send("API Working"));

app.listen(PORT,()=>{
    console.log('Server Started At PORT NO:',PORT);
})