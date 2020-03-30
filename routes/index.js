const express=require('express');

// using express route
const router=express.Router();


router.use('/api',require('./api'));



module.exports=router;