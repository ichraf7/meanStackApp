const express=require('express')
const router=express.Router()
const User =require('../models/user.model');
const UserController=require('../controller/user.controller')
const passport=require('passport');
const jwt =require('jsonwebtoken');
const a=require('../passport.js').passport_JWT(passport); 
//register
router.post('/register',UserController.user_register)

//login
router.post('/login',UserController.user_login)

//profile
router.get('/profile',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
    res.send("/profile")
})

router.post('/registerWithGoogle',UserController.user_registerWithGoogle)

//login
router.post('/loginWithGoogle',UserController.user_loginWithGoogle)

//profile
router.get('/profile',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
    res.send("/profile")
})


module.exports=router