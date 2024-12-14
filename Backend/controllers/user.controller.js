const userModel=require('../models/user.model')
const userService=require('../services/user.services')
const validationResult=require('express-validator')

module.exports.registerUser=async (rer,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({message:errors.array()})
    }

    const {firstname,lastname,email,password}=req.body;
   
    const hashedPassword=await userModel.hashedPassword(password);
    const user=await userService.createUser({
        firstname,
        lastname,
        email,
        password:hashedPassword,
    })

    const token=user.generateAuthToken();

}