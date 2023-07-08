const asyncHandler=require("express-async-handler");
const jwt=require("jsonwebtoken");

const validateToken=asyncHandler(async(req,res,next)=>{
    let token;
    let authHeader=req.headers.Authorization||req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer"))
    {
        token=authHeader.split(" ")[1];
        jwt.verify(token,process.env.ACESS_TOKEN_SECERET,(err,decoded)=>{
            if(err)
            {
                res.status(401);
                throw new Error("The token is invalid or the token is expired");
            }
            req.e_user=decoded.e_user;
            next();//a middleware after putting the information in req.user body;
        });
        if(!token)
        {
            res.status(401);
            throw new Error("This is not a valid token");
        }
    }
});
module.exports=validateToken;