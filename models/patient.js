const mongoose = require('mongoose');


// creating patient schema 
const patientschema=new mongoose.Schema({
    mobile_no:
    {    type:Number,
        required:true,
        unique:true,
    },
    name:
    {
        type:String
    },

    report:
    [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Report'
        }
    ]
},{timestamps:true});


// registring schema in db with patient

const Patient=mongoose.model('Patient', patientschema);

module.exports=Patient;