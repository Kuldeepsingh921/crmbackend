const express=require("express")

const app=express.Router()

const batchModel=require("../Model/MasterBatchModel")

app.use(express.json())

app.get("/",async(req,res)=>{
  const value=req.query
   const data=await batchModel.find(value)
   res.send(data)
})
     
app.post("/addbatch",async(req,res)=>{
  try{
      const newbatch=new batchModel(req.body)
      await newbatch.save()
      res.send("New batch is created")
  }
  catch(err){
    res.send("batch is not created",err.message)
  }
})

app.patch("/:id",async(req,res)=>{
  const id=req.params.id
  try{
    const  updatedbatch=await batchModel.findByIdAndUpdate({"_id":id},{...req.body},{new:true})
    res.send(" batch is updated")
  }
  catch(err){
    res.send("batch not updated")
  }

})

app.delete("/delete/:id",async(req,res)=>{
  const id=req.params.id
   try{
      const  batchDeleted=await batchModel.findByIdAndDelete({"_id":id})
      res.send("batch is deleted")
   }
   catch(err){
    res.send("batch is not deleted")
   }
})

module.exports=app