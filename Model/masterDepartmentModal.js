const mongoose=require("mongoose")

const masterDepartmentSchema=mongoose.Schema({
    departmentname:{type:String,required:true}
})

const masterDepartmentModel=mongoose.model("masterDepartment",masterDepartmentSchema)

module.exports=masterDepartmentModel