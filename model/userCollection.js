const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    
    username:{
        type:String,
        required:true,
        trim:true    
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    contact:{
        type:String,
        required:true,
        trim:true,
        minlength: 10,
        maxlength: 13
    },
   
    services:{
        type:String,
        required:true,
        trim:true 
    },
    msg:{
        type:String,
        required:true,
        trim:true
    }

})
const users=new mongoose.model("users",userSchema)
module.exports=users