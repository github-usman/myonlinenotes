import express, { json } from "express";
const router = express.Router();



router.get('/',(req,res)=>{
    const obj = {
      one: {
         a:'notes',
        number: 34
       },
     two:{
        a:'notes written',
        number: 100
     }
    }
    res.json(obj);
})


export default router;