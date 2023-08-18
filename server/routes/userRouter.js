import express from "express";
const router= express.Router();
import { login, signup } from "../controllers/auth.js";
router.get('/',(req,res)=>res.status(200).json('Create User'))
router.post('/signup',signup)
router.post('/login',login)




export default router