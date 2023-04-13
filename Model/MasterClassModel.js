const mongoose=require("mongoose")

const masterClassSchema=mongoose.Schema({
    location:{type:String,required:true},
    noofseats:{type:String,required:true},
    classroom:{type:String,required:true},
   
})

const masterClassModel=mongoose.model("masterclass",masterClassSchema)

module.exports=masterClassModel