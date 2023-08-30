import express from "express";
const router = express.Router();
import { deleteQuestion, getAllQuestion, questionData } from "../controllers/question.js";
import  {askQuestion}  from "../controllers/question.js";
import { auth } from "../middleware/authMiddle.js";


router.post('/ask', auth, askQuestion);
router.get('/', auth,getAllQuestion);
router.delete('/delete/:id', deleteQuestion);
router.get('/post/:id', questionData)
export default router