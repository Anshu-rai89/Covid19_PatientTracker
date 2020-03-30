const express=require('express');

// using express route
const router=express.Router();


router.use('/v1',require('./v1'));



module.exports=router;