const mongoose=require("mongoose")

const masterBankSchema=mongoose.Schema({
    bankname:{type:String,required:true},
    bankaccountname:{type:String,required:true},
    bankaccountno:{type:String,required:true},
    ifsccode:{type:String,required:true},
    openingbalance:{type:String,required:true}
})

const masterBankModel=mongoose.model("masterbank",masterBankSchema)

module.exports=masterBankModel