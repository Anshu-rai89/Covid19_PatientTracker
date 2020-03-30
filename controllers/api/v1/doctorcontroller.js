const Doctor=require('../../../models/doctor');

const jwt=require('jsonwebtoken');


// function to create session
module.exports.createsession = async function(req,res)
{  
    // finding the user 
   try{
    let user= await Doctor.findOne({email:req.body.email});

    if(!user || user.password!=req.body.password)
    {
        return res.json(422,
            {
                message:" invalid user "
            });
    }

//  returning json token
    return res.json(200,
        {
           message:'Sign in find your token and keep it safe ',
           data:
           {
               token:jwt.sign(user.toJSON(),'zcWSL8dB5WEn5k9Af5r7nHWGPOUCiARe',{expiresIn:'1000000'})
           }
        });
} catch(err)
    {
         return res.json(500,
            {
                messgae:"internal server error "
            });
    }

}


// function to Rgister doctor 

module.exports.create=async function(req,res)
{
    try
    {

        
        let user=await Doctor.find({email:req.body.email});
   // if useer is already in dbn
        if(user)
        {
             
            return res.json(500,
                {
                    messgae:"User Already Exist "
                });
        }
        else
        {

            // crating doctor in db
            let user =await Doctor.create(req.body);

            return res.json(400,
                {
                    message:'user created succesffuly'
                });
        }
    }catch(err)
    {
         
        return res.json(500,
            {
                messgae:"error ",
                data:err
            });
    }
}

