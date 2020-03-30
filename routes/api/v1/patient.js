const express=require('express');

// using express route
const router=express.Router();
const passport=require('passport');
const patinetController=require('../../../controllers/api/v1/patientcontroller');

// protected route
router.post('/:id/create_report',passport.authenticate('jwt', { session: false },patinetController.createReport);
router.post('/:id/all_reports',patinetController.allReport);




module.exports=router;