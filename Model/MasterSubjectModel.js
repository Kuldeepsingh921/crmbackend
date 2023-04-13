const mongoose=require("mongoose")

const masterSubjectSchema=mongoose.Schema({
    coursename:{type:String,required:true},
    subjectcode:{type:String,required:true},
    subjectname:{type:String,required:true},
    fee:{type:String,required:true}
})

const masterSubjectModel=mongoose.model("mastersubject",masterSubjectSchema)

module.exports=masterSubjectModel