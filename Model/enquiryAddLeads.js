const mongoose=require("mongoose")

const addLeadsSchema=mongoose.Schema({
    enquirydate:{type:String,required:true},
    address:{type:String,required:true},
    modeofstudy:{type:String,required:true},
    preferedtime:{type:String,required:true},
    candidatename:{type:String,required:true},
    followupmedium:{type:String,required:true},
    gender:{type:String,required:true},
    enquirysource:{type:String,required:true},
    mobileno:{type:String,required:true},
    assignedto:{type:String,required:true},
    alternateno:{type:String,required:false},      
    interestlevel:{type:String,required:false},
    email:{type:String,required:true},
    status:{type:String,required:true},
    demoattended:{type:String,required:true},
    countryname:{type:String,required:true},
    visitor:{type:String,required:false},
    statename:{type:String,required:false},
    discount:{type:String,reqiured:true},
    cityname:{type:String,required:true},
    remark:{type:String,required:true},
    nextfollowupdate:{type:String,required:true},
    course:{type:String,required:true},
    module:{type:String,required:false},
    
})

const addLeadsModel=mongoose.model("addleads",addLeadsSchema)


module.exports=addLeadsModel