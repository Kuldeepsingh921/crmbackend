const mongoose=require("mongoose")

const distributeleadsManuallySchema=mongoose.Schema({
    userId:{type:String,required:true},
    users:{type:[String],required:true}
})

const distributedleadsManuallyModel=mongoose.model()