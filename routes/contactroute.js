const express=require('express');
const router=express.Router();//router function
const {getContact,getSContact,postContact,putContact,deleteContact}=require("../controllers/contactcontroller");
const validateToken = require('../middleware/validatetokenhandler');
router.use(validateToken);
router.route("/").get(getContact);
router.route("/").post(postContact);
router.route("/:id").get(getSContact);
router.route("/:id").put(putContact);
router.route("/:id").delete(deleteContact);
module.exports=router;