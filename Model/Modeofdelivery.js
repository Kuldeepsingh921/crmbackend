const mongoose=require("mongoose")

const modeofdeliverySchema=mongoose.Schema({
    mode:{type:String,required:true},
    remark:{type:String,required:true}
})

const modeofdeliveryModel=mongoose.model("modeofdelivery",modeofdeliverySchema)

module.exports=modeofdeliveryModel