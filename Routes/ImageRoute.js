const express=require("express")

const app=express.Router()

const uploadMiddleware=require("../Middleware/multermiddleware")

const imageModel=require("../Model/imageModal")

app.get("/",async(req,res)=>{
    const image=await imageModel.find()
    res.send(image)
})

app.post("/addimage",uploadMiddleware.single("photo"),async(req,res)=>{
   const photo=req.file.filename
   try{
    const image=new imageModel({photo})
    await image.save()
    res.send("image uploaded")
   }
   catch(err){
    res.send("image is not uploaded")
   }
})

module.exports=app