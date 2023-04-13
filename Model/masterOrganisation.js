const mongoose=require("mongoose")

const masterOrganisationSchema=mongoose.Schema({
   name:{type:String,required:true},
   address:{type:String,required:true},
   email:{type:String,required:true},
   mobileno:{type:String,required:true},
   phoneno:{type:String,required:false},
   zipcode:{type:String,required:true},
   fax:{type:String,required:true},
   website:{type:String,required:true}
})

const masterOrganisationModel=mongoose.model("masterOrganisation",masterOrganisationSchema)

module.exports=masterOrganisationModel