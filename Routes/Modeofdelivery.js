const express=require("express")

const app=express.Router()

const mode=require("../Model/Modeofdelivery")

app.use(express.json())

app.get("/",async(req,res)=>{
  const value=req.query
   const data=await mode.find(value)
   res.send(data)
  // res.send(value)
})

app.post("/addnode",async(req,res)=>{
  try{
      const node=new mode(req.body)
      await node.save()
      res.send("node is created")
  }
  catch(err){
    res.send("new node is not created")
  }
})

app.patch("/:id",async(req,res)=>{
  const id=req.params.id
  try{
    const node=await mode.findByIdAndUpdate({"_id":id},{...req.body},{new:true})
    res.send("node is updated")
  }
  catch(err){
    res.send("mode is not changed")
  }

})

app.delete("/delete/:id",async(req,res)=>{
  const id=req.params.id
   try{
      const node=await mode.findByIdAndDelete({"_id":id})
      res.send("node is deleted")
   }
   catch(err){
    res.send("node is not deleted")
   }
})

module.exports=app