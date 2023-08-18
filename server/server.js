import express from "express";
import questionRouter from './routes/questionRouter.js'
import answerRouter from './routes/answerRouter.js'
import userRouter from './routes/userRouter.js'
import  Mongoose  from "mongoose";
import * as dotenv from 'dotenv'
import cors from 'cors'
const app = express();
const PORT = process.env.PORT||4000;

dotenv.config()

// Express Connection
app.get('/',(req,res)=> res.send('Hello World'))
// Express Routers
app.use(express.json());
app.use(cors())
app.use('/question', questionRouter)
app.use('/answer', answerRouter)
app.use('/user', userRouter)
// Mongoose Connection
const MONGO_URL =process.env.MONGO_URL;
Mongoose.connect(MONGO_URL,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>console.log('MongoDB connected'))
.catch((err)=>console.log(err.message))



app.listen(PORT,()=>console.log(`This Server started on PORT ${PORT} 💥💥`));