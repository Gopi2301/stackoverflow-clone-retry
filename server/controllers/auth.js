
import bcrypt from 'bcrypt';
import user from '../models/auth.js'
import  jwt  from 'jsonwebtoken';
import * as dotenv from 'dotenv'

dotenv.config()

const secretKey = process.env.SECRET
export const signup = async(req, res)=>{
    
    const {name, email,password}= req.body;
    
    try {
        const existingUser = await user.findOne({email});
        if(existingUser){{
            return res.status(404).json({message:'User already Exist'})
        }}
        const hashedPassword =await bcrypt.hash(password, 12);
        const newUser = await user.create({name, email, password:hashedPassword});
        const token = jwt.sign({email: newUser.email, id: newUser._id},secretKey, {expiresIn: '1hr'})
        res.status(200).json({newUser, token}) 
    } catch (error) {
        res.status(500).send(error)
    }
}
export const login = async(req, res)=>{
    const {email, password}= req.body;
    try {
        const existingUser = await user.findOne({email})
        if(!existingUser){
            return res.status(404).json("User not found")
        }
        const isPasswordCrct= await bcrypt.compare(password, existingUser.password)
        if(!isPasswordCrct){
           return res.status(400).json("Invalid Credentials")
        }
        const token = jwt.sign({email: existingUser.email, id: existingUser._id},secretKey)
        res.status(200).json({existingUser, token})
    } catch (error) {
        res.status(500).send(error.message)
    }
}