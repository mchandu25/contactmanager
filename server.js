const express=require('express');
const dotenv=require("dotenv").config();
const app=express();
const errorHandler=require("./middleware/errorhandller");
const connectDb = require('./config/dbconnection');
const port=process.env.port;

//as a midlleware it uses
app.use(express.json());//used for taking inputmfrom server as json acts as an midlleware// a middleware to print the error in json
app.use("/api/contacts",require("./routes/contactroute")) ;
app.use("/api/users",require("./routes/userroute")) ;
app.use(errorHandler);

var start=async()=>{
    try{
        await connectDb();
        app.listen(port,()=>{
            console.log(`server running on the port ${port}`)
        })
    }
    catch(err){
        console.log(err);
    }
}
start()