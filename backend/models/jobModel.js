const mongoose= require('mongoose');

const jobSchema = new mongoose.Schema({
    "company_name":{type:String,required:true},
      "job_title": {type:String,required:true},
       "Selection_Process": {type:String,required:true},
      "Qualification": {type:String,required:true},
      "Required_Skills": {type:String,required:true},
      "Experience": {type:String,required:true},
      "Minimum_Salary": {type:String,required:true},
      "Maximum_Salary": {type:String,required:true},
     })

module.exports= mongoose.model("Jobs",jobSchema);