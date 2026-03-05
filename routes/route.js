import express from 'express';
import { homecontroller,createController } from '../controllers/homecontroller.js';
import readcontroller from '../controllers/readcontroller.js';
const route=express.Router();
route.get('/',homecontroller);
route.post('/', createController);
route.get('/read',readcontroller);
// route.get('/',(req,res)=>{
//     res.send("hello route")
// });
export default route;