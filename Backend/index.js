// const express = require('express')  add type : module

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import cookieParser from "cookie-parser";

import cors from "cors";
import userRoute from "./routes/user.route.js";

import messageRoute from "./routes/message.route.js";


import { app, server } from "./SocketIO/server.js";

//importing for deployment
import path from "path";


// const app = express();  //app is already declared 
dotenv.config();

// middleware
app.use(express.json())
app.use(cookieParser());
app.use(cors());  

const PORT = process.env.PORT || 5001;
const URI= process.env.MONGODB_URI;


//database connectivity
try{
    
  mongoose.connect(URI)
  console.log("MongoDB Connected");
}catch(error){
  console.log(error);
}

//routes
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);



//          -------Code for deployment ------------
if(process.env.NODE_ENV === 'production'){
  const dirPath = path.resolve();
  app.use(express.static("./Frontend/dist"));
  app.get('*', (req, res)=>{
    res.sendFile(path.resolve(dirPath, './Frontend/dist','index.html' ));
  })

}








// app.listen(PORT, () => {
//   console.log(`Server is runnning on port ${PORT}`)
// }  

//Socket.io
//now using socket.io for server run not express hence app is change to server
server.listen(PORT, () => {
  console.log(`Server is runnning on port ${PORT}`)
}
)