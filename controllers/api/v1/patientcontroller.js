const Patient=require('../../../models/patient');
const Report=require('../../../models/report');
const Doctor=require('../../../models/doctor');
const jwt=require('jsonwebtoken');

module.exports.create=async function(req,res)
{
    try
    {     
        // verifying user 
        let chck=await wt.verify(req.token,'zcWSL8dB5WEn5k9Af5r7nHWGPOUCiARe');

         // finding the currunt doctor by id 
        let doctor=await Doctor.findById(req.user.id);

        // checking if a patient is already present or not 

        let patient=await Patient.find({mobile_no:req.body.mobile_no});
     

        // if patients detail is found retun its info
        if(patient)
        {
            return res.json(200,
                {
                messgae:'Patient with details already present ',
                data:patient
                }
            );
        }
        else{

            // craeting patient in db
            let patient=await Patient.create(req.body);
             

            // adding patient id in doctor db
            doctor.patient.push(patient);
            doctor.save();
            return res.json(200,
                {
                messgae:'Patient craeted succefully ',
                data:patient
                });

        }

    }catch(err)
    {
        return res.json(500,
            {
                messgae:"error in creating user  ",
                data:err
            });
    }
}



module.exports.createReport=async function(req,res)
{

    try{
   
        
      // verifying jwt tokens
       let chck=await wt.verify(req.token,'zcWSL8dB5WEn5k9Af5r7nHWGPOUCiARe');

    const statudetails=['Negative','Travelled-Quarantine','Symptopms-Qurantine','Postive-admit'];
     
    // finding patient by id 
    let patient=await Patient.findById(req.params.id);

    // generating our random index 
    let index=Math.floor(Math.random() * 3) ;


    //  craeting our Report 
    let report=await Report.create(
        {
            created_by:req.user.id,
            status:statudetails[index],
            data:req.body.date
        });


        // saving report in patient schema 
        patient.report.push(report);
        patient.save();
      
        return res.json(200,
            {
            messgae:'Report craeted succefully ',
            data:report
            });

    }

    catch(err)
    {

        return res.json(500,
            {
                messgae:"eror in craeting report ",
                data:err
            });
    }

}



module.exports.allReport=async function(req,res)
{

    try
    {

    // fetching all report based on patient id from report db
    let report=await Report.find({patient_id:req.params.id})
                            .sort('-createdAt')
                            .populate('createdby');

        return res.json(200,
            {
            messgae:'Reports  ',
            data:report
            });
    }
    catch(err)
    {

        return res.json(500,
            {
                messgae:"eror in fetching report ",
                data:err
            });
    }
}