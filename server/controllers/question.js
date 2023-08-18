import question from "../models/question.js";

export const askQuestion = async(req, res)=>{
   const postQuestionData= req.body;
   const postQuestion = new question({...postQuestionData, userId: req.userId})
try {
    await postQuestion.save()
    res.status(200).json('Question Posted successfully')
} catch (error) {
    res.status(409).json("Couldn;t post a Question")
}
}