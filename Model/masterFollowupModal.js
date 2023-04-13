const mongoose=require("mongoose")

const masterFollowupSchema=mongoose.Schema({
    followup:{type:String,required:true}
})

const masterFollowupModel=mongoose.model("masterFollowup",masterFollowupSchema)

module.exports=masterFollowupModel