import express from "express";
const router = express.Router();
import { deleteQuestion, getAllQuestion, questionData } from "../controllers/question.js";
import  {askQuestion}  from "../controllers/question.js";
import { auth } from "../middleware/authMiddle.js";


router.post('/ask', askQuestion);
router.get('/', getAllQuestion);
router.delete('/delete/:id', deleteQuestion);
router.get('/post/:id',auth, questionData)
export default router