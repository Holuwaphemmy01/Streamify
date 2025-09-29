 import express from "express";
 import authRoutes from "./routes/auth.route.js"; 
 import "dotenv/config";
 import cors from "cors";
 import { connectDB } from "./lib/db.js";
 import cookieParser from "cookie-parser";
 import userRoutes from "./routes/user.route.js";
 import chatRoutes from "./routes/chat.route.js";
 

 const app = express();

 const PORT = process.env.PORT; 

   app.use(cors({
     origin: "http://localhost:5173",
     credentials: true, // allow frontend to send cookies
   }));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);

app.use("/api/chat", chatRoutes);


  let result;
 app.listen (PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
 });
connectDB();

 app.get("/", (req, res)=> {
  if(result === undefined) {res.status(500).json({"newResult":"Database not working"})}
  else{res.status(200).json({
    message: "Streamify Backend and Mongo Database connected successfully"
  })}
 });


// app.get("/", (req, res) => {
//   // Check mongoose connection state instead of a variable
//   if (mongoose.connection.readyState !== 1) {
//     return res.status(500).json({
//       status: "error",
//       message: "Database not connected"
//     });
//   } else {
//     return res.status(200).json({
//       status: "success",
//       message: "Streamify Backend Working",
//       database: "connected"
//     });
//   }
// });
