const mongoose=require("mongoose")

const ExcelleadsSchema=mongoose.Schema({
    file:{type:String,required:false},
    status:{type:String,default:"pending"},
    name:{type:String,default:false},
    email:{type:String,default:false},
   mobileno:{type:String,required:false},
   assignedto:{type:String,required:false},
   interestlevel:{type:String,required:false},
   status:{type:String,required:false},
    enquirydate:{type:String,required:false},
    address:{type:String,required:false},
    modeofstudy:{type:String,required:false},
    preferedtime:{type:String,required:false},
    followupmedium:{type:String,required:false},
    gender:{type:String,required:false},
    enquirysource:{type:String,required:false},
    
    
    alternateno:{type:String,required:false},      
    
    
    demoattended:{type:String,required:false},
    countryname:{type:String,required:false},
    visitor:{type:String,required:false},
    statename:{type:String,required:false},
    discount:{type:String,reqiured:false},
    cityname:{type:String,required:false},
    remark:{type:String,required:false},
    nextfollowupdate:{type:String,required:false},
    course:{type:String,required:false},
    module:{type:String,required:false},
})

const ExcelleadsModal=mongoose.model("exceldata",ExcelleadsSchema)


module.exports=ExcelleadsModal