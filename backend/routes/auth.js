import express from "express";
import User from "../models/User.js";
const router = express.Router();


// Create a user using : Post "/auth" Doesnt require Auth
router.post('/',(req,res)=>{
    
   console.log(req.body);
   const user = User(req.body);
   user.save();
   console.log("saved")
   res.send(req.body);
})


export default router;