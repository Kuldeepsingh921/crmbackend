const mongoose=require("mongoose")

const masterCitySchema=mongoose.Schema({
    countryname:{type:String,required:true},
    statename:{type:String,required:true},
    cityname:{type:String,required:true},
   
})

const masterCityModel=mongoose.model("mastercity",masterCitySchema)

module.exports=masterCityModel