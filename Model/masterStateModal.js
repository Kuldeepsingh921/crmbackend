const mongoose=require("mongoose")

const masterStateSchema=mongoose.Schema({
    countryname:{type:String,required:true},
    state:{type:String,required:true}
})

const masterStateModel=mongoose.model("masterstate",masterStateSchema)

module.exports=masterStateModel