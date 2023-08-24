import mongoose from 'mongoose';
import question from '../models/question.js'




export const postAnswer = async(req, res)=>{
    const {id : _id}= req.params; 
    const {noOfAnswers, answerBody, userAnswered}= req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(400).send('Question Not Found..')
    }
    updateNoOfAnswer(_id, noOfAnswers)
    try {
        const updatedQuestion = await question.findByIdAndUpdate(_id,{$push:{
            answer:{
                answerBody,userAnswered, userId:req.userId
            },
        }},{new:true})
        res.status(200).json(updatedQuestion)
    } catch (error) {
        res.status(400).json(error)
    }
}
const updateNoOfAnswer = async(_id, noOfAnswer)=>{
    try {
        await question.findByIdAndUpdate(_id, {$set:{'noOfAnswers':noOfAnswer}})
    } catch (error) {
        console.log(error)
    }
}