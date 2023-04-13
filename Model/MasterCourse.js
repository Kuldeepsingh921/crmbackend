const mongoose=require("mongoose")

const mastercourseSchema=mongoose.Schema({
    coursename:{type:String,required:true},
    duration:{type:String,required:true},
    noofmodule:{type:String,required:true},
    fee:{type:String,required:true}
})

const mastercourseModel=mongoose.model("mastercourse",mastercourseSchema)

module.exports=mastercourseModel