const mongoose=require("mongoose")

const CounsellorLeadsSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:false},
    assignedto:{type:String,required:true},
    phoneno:{type:String,required:true},
    userId:{type:String,required:true}
})

const CounsellorModel=mongoose.model("counselllorleads",CounsellorLeadsSchema)


module.exports=CounsellorModel