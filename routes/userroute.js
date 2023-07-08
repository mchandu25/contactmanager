const express=require('express');
const { registerUser, loginUser, currentUser } = require('../controllers/usercontroller');
const validateToken = require('../middleware/validatetokenhandler');
const router=express.Router();
router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/current',validateToken,currentUser);
module.exports=router;// we hav to export router because we are toutuinf from it to the file;