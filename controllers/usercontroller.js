const asyncHandler=require('express-async-handler');
const jwt=require('jsonwebtoken');
const user=require('../models/usersschema')
const bcrypt=require('bcrypt');
const express = require('express');
//public
const registerUser=asyncHandler(async(req,res)=>
{   const {name,email,password}=req.body;
if(!name||!email||!password)
{
    res.status(400);
    throw new Error("All fields are mandatory!");
}
const userAvailable=await user.findOne({email})
if(userAvailable)
{
    res.status(400);
    throw new Error("user already exist");
}
const hashedPassword=await bcrypt.hash(password,11);
const new_user=await user.create({
    name,
    email,
    password:hashedPassword,
});
console.log(`user created ${new_user}`);
if(user)
{
res.status(201).json({_id:new_user.id,email:new_user.email});
}
else
{
    res.status(400);
    throw new Error("user data is not valid");
}
// console.log("Hashed password is:",hashedPassword);
//     res.json({message:"register user"});
});
//public
const loginUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    if(!email||!password)
    {
        res.status(400);
        throw new Error("validatio error");
    }
    const e_user=await user.findOne({email});
    if(e_user && await(bcrypt.compare(password,e_user.password)))
    {
        const acesstoken=jwt.sign({
            e_user:{                        //payload
                name:e_user.name,
                email:e_user.email,
                id:e_user.id,
            },
        },process.env.ACESS_TOKEN_SECERET,{expiresIn:"16m"});
        res.status(201).json({acesstoken})
    }
    else
    {
        res.status(401);
        throw new Error("Email or password is not valid");
    }

    //res.json({message:"login user"});
});
//private
const currentUser=asyncHandler(async(req,res)=>{
    res.json(req.e_user);
});
module.exports={registerUser,loginUser,currentUser};