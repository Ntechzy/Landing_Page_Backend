// import dotenv from "dotenv"
// import connectDB from "./db/index.js";
// import {app} from './app.js'

// dotenv.config({
//     path: "./.env"
// })



// connectDB()
// .then(() => {
//     app.listen(process.env.PORT || 8000, () => {
//         console.log(`Server is running at port : ${process.env.PORT}`);
//     })
// })
// .catch((err) => {
//     console.log("MONGO db connection failed !!! ", err);
// })

import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import userRouter from "./routes/user.route.js";
import connectDB from "./db/index.js";

dotenv.config();
const app = express(); 
const PORT = process.env.PORT;  

connectDB();

app.use(express.json());

app.use(cors({
  origin: '*',
  methods: ['GET', 'PUT', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use("/api",userRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
