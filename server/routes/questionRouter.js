import express from "express";
const router = express.Router();

import  {askQuestion}  from "../controllers/question.js";

router.post('/ask', askQuestion)
export default router