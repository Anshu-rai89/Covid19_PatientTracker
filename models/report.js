const mongoose = require('mongoose');


const reportSchema=new mongoose.Schema({
    created_by:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor',
        required:true
    },
    patient_id:
    {
        type:mongoose.Schema.Types.ObjectId
    },
    status:
    {
        type:String,
        required:true
    },
    date:
    {
        type:Date,
        required:true
    }
},{timestamps:true});



const Report=mongoose.model('Report',reportSchema);

module.exports=Report;