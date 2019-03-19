const mongoose=require('mongoose');

const UserSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String , required:true },
    email:{type:String,required:true},
    password:{type:String ,required:true}
})

module.exports=mongoose.model('User',UserSchema)

