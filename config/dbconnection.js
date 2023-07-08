const mongoose=require('mongoose');
const connectDb=async()=>{
    try{
        const connect=await mongoose.connect(process.env.MYCONNECTION_STRING);
        console.log("The connection to db is established:",connect.connection.host,connect.connection.name);

    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.exports=connectDb;