import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";



const app = express()


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


app.use(express.json({limit:"16kb"}))  // limit set for recieving data
app.use(express.urlencoded({extended:true, limit:"16kb"}))  // taking data from url
app.use(express.static)  // for public assets for storing files/ images 
app.use(cookieParser())  //storing or removing cookies from sever


export {app}



