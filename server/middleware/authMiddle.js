import  jwt  from 'jsonwebtoken';

export const auth = ( req,res, next)=>{
    try{
        const token = req.header("x-auth-token");
       
        
        jwt.verify(token.split(' ')[1], process.env.SECRET);
        next();
    }catch(err){
     res.status(401).send(err.message+'from auth middleware');
    }
}