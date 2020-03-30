const express=require('express');

// using express route
const router=express.Router();
const passport=require('passport');
const doctorController=require('../../../controllers/api/v1/doctorcontroller');


router.post('/register',doctorController.create);
router.post('/login',doctorController.createsession);




module.exports=router;