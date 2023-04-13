const mongoose=require("mongoose")

const masterCountrySchema=mongoose.Schema({
    countryname:{type:String,required:true}
})

const masterCountryModel=mongoose.model("masterCountry",masterCountrySchema)

module.exports=masterCountryModel