const express=require("express")

const app=express.Router()

const qualification=require("../Model/MasterQualification")

app.use(express.json())

app.get("/",async(req,res)=>{
  const value=req.query
   const data=await qualification.find(value)
   res.send(data)
})

app.post("/addqualification",async(req,res)=>{
  try{
      const newqualification=new qualification(req.body)
      await newqualification.save()
      res.send("qualification is created")
  }
  catch(err){
    res.send("new qualification is not created")
  }
})

app.patch("/:id",async(req,res)=>{
  const id=req.params.id
  try{
    const  newqualification=await qualification.findByIdAndUpdate({"_id":id},{...req.body},{new:true})
    res.send(" newqualification is updated")
  }
  catch(err){
    res.send("qualification is not changed")
  }

})

app.delete("/delete/:id",async(req,res)=>{
  const id=req.params.id
   try{
      const  newqualification=await qualification.findByIdAndDelete({"_id":id})
      res.send(" newqualification is deleted")
   }
   catch(err){
    res.send(" newqualification is not deleted")
   }
})

module.exports=app