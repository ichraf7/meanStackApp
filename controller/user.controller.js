const User =require('../models/user.model');
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt =require('jsonwebtoken'); 
const Config=require('../config/config');

exports.user_register=(req,res,next)=>{
    //verifying that user don t exist
    User.find({email:req.body.email}).exec()
    .then(user=>{
        if(user.length){
          res.status(409).json({message:"email already used"})
        } 

        else{
       //hashing password
       bcrypt.hash(req.body.password ,10 ,(err,hash)=>{
       if(err){
        console.log(err)
        res.status(500).json({
            error:err
        })
      }
      else{
        const user=new User({
            _id:mongoose.Types.ObjectId(),
            email:req.body.email,
            name:req.body.name,
            password:hash
     })
       user.save()
       .then(result=>{
       console.log(result)
        res.status(200).json({message:'user created successfully'})
       })
       .catch(err=>{
        console.log(err)
        res.status(500).json({
        message:err
       })
   })
  }
})   
}
})        
           .catch(err=>{
           res.status(500).json({
            error:err
        })
    })
}

exports.user_login=(req,res,next)=>{
    User.findOne({email:req.body.email}).exec()
    .then(user=>{
      if (user!=null){

        bcrypt.compare(req.body.password ,user.password ,(err,result)=>{
            if(err){
              res.status(401).json({
                    message:" auth failed"
                })
            }
            if(result){               
                const token=jwt.sign(
                    {
                     email:user.email ,
                     userID :user._id
                    } ,
                    
                        Config.JWT_KEY,
                        {
                            expiresIn :604800
                        })

                res.status(200).json({
                    message:"auth successful" ,
                    token :'JWT '+token,
                    userID:user._id,
                    ok:true
            })
            }
            else if(!result){
                 res.status(401).json({
                    message:" auth failed",
                    ok:false
                })
            }
            
        }) 
      }
      else{
          res.status(401).json({
              message:"auth failed",
              ok:false
          })
      }
      
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
} 

exports.user_registerWithGoogle=(req,res,next)=>{
    console.log(req)
}


exports.user_loginWithGoogle=(req,res,next)=>{
    console.log(req)
}