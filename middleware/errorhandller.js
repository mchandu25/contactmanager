const consants=require('../consants.js');
var consantsInside=consants["consants"]
const errorHandler=(err,req,res,next)=>
{
    const statusCode=res.statusCode?res.statusCode:500;
    switch(statusCode)
    {
        case consantsInside.VALIDATION_ERROR:
            res.json({title:"VALIDATION_ERROR",message:err.message,stackTrace:err.stack});
            break;
        case consantsInside.UNAUTHORIZED:
            res.json({title:"UNAUTHORIZED",message:err.message,stackTrace:err.stack});
            break;
        case consantsInside.FORBIDDEN:
            res.json({title:"FORBIDDEN",message:err.message,stackTrace:err.stack});
            break;
        case consantsInside.NOT_FOUND:
            res.json({title:"NOT FOUND",message:err.message,stackTrace:err.stack})
            break;
        case consantsInside.SERVER_ERROR:
            res.json({title:"SERVER_ERROR",message:err.message,stackTrace:err.stack});
            break;
        default:
            res.json({
                title:"UNKNOWN_ERROR",
                message:err.message
            })
            console.log("UNKNOWN ERROR TRIGGERED")
            break;
    }
    //same errormessage and stack trace of both err prefix 
};
module.exports=errorHandler;