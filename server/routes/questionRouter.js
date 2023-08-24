import express from "express";
const router = express.Router();
import { deleteQuestion, getAllQuestion } from "../controllers/question.js";
import  {askQuestion}  from "../controllers/question.js";

router.post('/ask', askQuestion);
router.get('/', getAllQuestion);
router.delete('/delete/:id', deleteQuestion);
export default router