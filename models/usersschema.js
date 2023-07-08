const mongoose=require('mongoose');
const useerSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter you name"],
    },
    email:{
        type:String,
        required:[true,"please enter your mail"],
        unique:[true,"email is already taken"],
    },
    password:{
        type:String,
        required:[true,"please enter your password"],
    },
},{timestamps:true});
module.exports=mongoose.model("user",useerSchema);