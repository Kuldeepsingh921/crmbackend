const mongoose=require("mongoose")

const masterTaxSchema=mongoose.Schema({
    tax:{type:String,required:true},
    description:{type:String,required:false}
})

const masterTaxModel=mongoose.model("mastertax",masterTaxSchema)

module.exports=masterTaxModel