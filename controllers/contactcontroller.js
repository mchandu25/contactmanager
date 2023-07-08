//@desc Get all contacts;
//@route Get/api/contacts;
//@access public
const asyncHandler=require('express-async-handler');
const Contact=require("../models/contactsschema")
const getContact=asyncHandler(async(req,res)=>
{
    const contacts=await Contact.find({user_id:req.e_user.id});
    res.status(200). json(contacts);// while sending in json format we have to send in the form of the object;
});

const postContact=asyncHandler(async(req,res)=>{   
    console.log("The requested body is:",req.body);
    const {name,email,phone}=req.body;
    if(!name||!email||!phone)
    {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const contact=await Contact.create({
        name,
        email,
        phone,
        user_id:req.e_user.id
    });
    res.status(201). json(contact);// while sending in json format we have to send in the form of the object;
});
const getSContact=asyncHandler(async(req,res)=>{
    const contact= await Contact.findById(req.params.id);
    if(!contact)
    {
        res.status(404);
        throw new Error("Contact not found")
    }
    res.status(200).json(contact);// while sending in json format we have to send in the form of the object;
});

const putContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id);
    if(!contact)
    {
        res.status(404);
        throw new Error("Contact not found");
    }
    if(contact.user_id.toString()!==req.e_user.id)
    {
        res.status(403);
        throw new Error("Unauthorized acess")
    }
    const updateContact=await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true});// we will give new body
    res.status(200). json(updateContact);// while sending in json format we have to send in the form of the object;
});

const deleteContact=asyncHandler(async(req,res)=>{
    // console.log(req)
    const contact=await Contact.findById(req.params.id);
    if(!contact)
    {
        res.status(404);
        throw new Error("Contact not found");
    }
    if(contact.user_id.toString()!==req.e_user.id)
    {
        res.status(403);
        throw new Error("Unauthorized acess")
    }
    await Contact.deleteOne({_id:req.params.id});
    res.status(200).json(contact);// while sending in json format we have to send in the form of the object;
});
module.exports={getContact,getSContact,postContact,putContact,deleteContact};