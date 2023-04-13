const mongoose=require("mongoose")

const masterBatchSchema=mongoose.Schema({
    batchcode:{type:String,required:false},
    batchname:{type:String,required:true},
    startdate:{type:String,required:true},
    completiondate:{type:String,required:true},
    batchtimefrom:{type:String,required:false},
    batchtimeto:{type:String,required:false},
    classroom:{type:String,required:true},
    faculty1:{type:String,required:false},
    faculty2:{type:String,required:false},
    batchtype:{type:String,required:true},
    batchsize:{type:String,required:true},
    batchstatus:{type:String,required:true},
    batchremark:{type:String,required:true},
    batchtypebasedonmod:{type:String,required:false},
    batchtypebasedoncoursetype:{type:String,required:false},
},{versionKey:false})

const masterBatchModel=mongoose.model("masterbatch",masterBatchSchema)

module.exports=masterBatchModel