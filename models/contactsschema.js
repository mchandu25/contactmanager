const mongoose=require('mongoose');
const contactSchema=mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"user",
    },
    name:{
        type:String,
        required:[true,"Please enter the contact number"]
    },
    email:{
        type:String,
        required:[true,"please enetre the email"]
    },
    phone:{
        type:String,
        required:[true,"Please enter the email"]
    },
},{timestamps:true});
module.exports=mongoose.model('contact',contactSchema);