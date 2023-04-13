const mongoose=require("mongoose")


const imageSchema=new mongoose.Schema(
    {
        photo:{
            type:String,
            required:true
        },

    },
    {timestamps:true}
)

const imageModel=mongoose.model("image",imageSchema)

module.exports=imageModel