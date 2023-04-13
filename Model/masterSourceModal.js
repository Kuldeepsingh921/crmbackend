const mongoose=require("mongoose")

const masterSourceSchema=mongoose.Schema({
    sourcename:{type:String,required:true}
})

const masterSourceModel=mongoose.model("masterSource",masterSourceSchema)

module.exports=masterSourceModel