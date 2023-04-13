const mongoose=require("mongoose")

const masterEmployeeSchema=mongoose.Schema({
    employeecode:{type:String,required:false},
    employeename:{type:String,required:true},
    dob:{type:String,required:true},
    dateofjoining:{type:String,required:true},
    gender:{type:String,required:true},
    mobileno:{type:String,required:true},
    phone:{type:String,required:false},
    email:{type:String,required:true},
    department:{type:String,required:true},
    countryname:{type:String,required:true},
    statename:{type:String,required:true},
    cityname:{type:String,required:true},
    maritalstatus:{type:String,required:true},
},{versionKey:false})

const masterEmployeeModel=mongoose.model("masteremployee",masterEmployeeSchema)

module.exports=masterEmployeeModel