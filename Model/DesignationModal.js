const mongoose=require("mongoose")

const masterdesignationSchema=mongoose.Schema({
    departmentname:{type:String,required:true},
    designationname:{type:String,required:true}
})

const masterdesignationModel=mongoose.model("masterdesignation",masterdesignationSchema)

module.exports=masterdesignationModel