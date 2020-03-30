const express=require('express');

// using express route
const router=express.Router();

const passport=require('passport');
const patientController=require('../../../controllers/api/v1/patientcontroller');


router.use('/doctors/',require('./doctor'));
router.use('/patients',require('./patient'));
router.post('/register_patient',passport.authenticate('jwt', { session: false }),patientController.create);




module.exports=router;