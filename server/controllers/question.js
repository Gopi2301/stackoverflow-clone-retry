import question from "../models/question.js";

export const askQuestion = async(req, res)=>{
   const postQuestionData= req.body;
   const postQuestion = new question({...postQuestionData, userId: req.userId})
try {
    await postQuestion.save()
    res.status(200).json('Question Posted successfully')
} catch (error) {
    res.status(404).json("Couldn't post a Question");
}
}
export const deleteQuestion = async(req,res)=>{
    const {id} = req.params;
    const deleteQuestion= await question.findByIdAndDelete(id);

    try {
        if(!deleteQuestion){return res.status(404).json('Question not found')}
        res.status(200).json({message:'Question Deleted SuccessFully!'})
    } catch (error) {
        res.status(500).json({message:'An error Occurred'})
        
    }
}