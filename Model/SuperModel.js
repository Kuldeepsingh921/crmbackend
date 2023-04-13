const mongoose=require("mongoose")

const superadminSchema=mongoose.Schema({
    UserId:{type:String,required:false},
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    address:{type:String,required:false},
    zipcode:{type:String,required:false},
    country:{type:String,required:false},
    city:{type:String,required:false},
    image:{type:String,required:false},
    role:{type:String,default:"superadmin"}
})

const superadminModel=mongoose.model("superadmin",superadminSchema)

module.exports=superadminModel