const express=require('express')
const router=express.Router();

const body= require('express-validator')
const userController=require('../controllers/user.controller')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:8}).withMessage('Password must be at least 8'),
    body('fullname.firstname').isLength({min:3}).withMessage('Name must be at required')
],userController.registerUser)




module .exports=router;