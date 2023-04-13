const mongoose=require("mongoose")

const masterqualificationSchema=mongoose.Schema({
   code:{type:String,required:true},
   name:{type:String,required:true}
})
const masterqualificationModel=mongoose.model("masterQualification",masterqualificationSchema)

module.exports=masterqualificationModel