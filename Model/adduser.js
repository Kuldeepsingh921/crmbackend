const mongoose=require("mongoose")

const adduserSchema=mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    phonenumber:{type:String,required:true},
    designation:{type:String,required:true},
    roles:{type:String,required:true},
    userId:{type:String,required:true}
})

const adduser=mongoose.model("adduser",adduserSchema)

module.exports=adduser