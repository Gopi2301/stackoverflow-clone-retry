import express from "express";
import {postAnswer} from '../controllers/Answer.js'

const router= express.Router();
router.patch('/post/:id', postAnswer);
export default router;