const mongoose=require("mongoose")

const LeadsStatusSchema=mongoose.Schema({
  status:{type:String,required:true},
  desc:{type:String,required:true}
},{versionKey:false})

const LeadsStatusModel=mongoose.model("masterlead",LeadsStatusSchema)

module.exports=LeadsStatusModel;