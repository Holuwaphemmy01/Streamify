import User from "../models/User.js";
import jwt from "jsonwebtoken";

export async function signup(req, res) {
   const {email, password, fullName} = req.body;
   try {
      if(!email || !password || !fullName){
         return res.status(400).json({message: "All fields are required"});
      }
      if(password.length < 6){
         return res.status(400).json({message: "Password must be at least 6 characters"});
      }

      const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if(!emailRegex.test(email)){
         return res.status(400).json({message: "Invalid email format"});
      }

      const existingUser = await User.findOne({email});
      if(existingUser){
         return res.status(400).json({message: "Email already in use"});
      }

      const index = Math.floor(Math.random() * 10) + 1;
      const randomAvatar = `https://avatar.iran.liara.run/public/${index}.png`;
      const newUser = new User.create({
         fullName,
         email,
         password,
         profilePic: randomAvatar,
      });

      const token = jwt.sign({userId:newUser._id}, 
         process.env.JWT_SECRET, {expiresIn: "1d"});

      res.cookie("jwt", token, {
         httpOnly: true,
         maxAge: 24 * 60 * 60 * 1000, // 1 day
         sameSite: "strict",
         secure: process.env.NODE_ENV === "production",
      });

      res.status(201).json({
         success: true,
         user: newUser,
         message: "User created successfully",
      });

   } catch (error) {
      
   }
   
}

export async function login(req, res) {
   res.send("Login Route");
}

export async function logout(req, res) {
   res.send("Logout Route");
}
