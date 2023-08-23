import express from "express";
const router = express.Router();
import { deleteQuestion } from "../controllers/question.js";
import  {askQuestion}  from "../controllers/question.js";

router.post('/ask', askQuestion)
router.delete('/delete/:id', deleteQuestion);
export default router