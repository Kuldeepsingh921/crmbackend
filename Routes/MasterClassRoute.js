const express=require("express")

const app=express.Router()

const classModel=require("../Model/MasterClassModel")

app.use(express.json())

app.get("/",async(req,res)=>{
  const value=req.query
   const data=await classModel.find(value)
   res.send(data)
})
     
app.post("/addclass",async(req,res)=>{
  try{
      const newClass=new classModel(req.body)
      await newClass.save()
      res.send("New class is created")
  }
  catch(err){
    res.send("class is not created")
  }
})

app.patch("/:id",async(req,res)=>{
  const id=req.params.id
  try{
    const  updatedClass=await classModel.findByIdAndUpdate({"_id":id},{...req.body},{new:true})
    res.send(" class is updated")
  }
  catch(err){
    res.send("class not updated")
  }

})

app.delete("/delete/:id",async(req,res)=>{
  const id=req.params.id
   try{
      const  classDeleted=await classModel.findByIdAndDelete({"_id":id})
      res.send("class is deleted")
   }
   catch(err){
    res.send("class is not deleted")
   }
})

module.exports=app