const express=require("express")

const app=express.Router()

const followup=require("../Model/masterFollowupModal")

app.use(express.json())

app.get("/",async(req,res)=>{
  const value=req.query
   const data=await followup.find(value)
   res.send(data)
})

app.post("/addfollowup",async(req,res)=>{
  try{
      const newfollowup=new followup(req.body)
      await newfollowup.save()
      res.send("followup is created")
  }
  catch(err){
    res.send("new followup is not created")
  }
})

app.patch("/:id",async(req,res)=>{
  const id=req.params.id
  try{
    const  newfollowup=await followup.findByIdAndUpdate({"_id":id},{...req.body},{new:true})
    res.send(" new followup is updated")
  }
  catch(err){
    res.send("followup is not changed")
  }

})

app.delete("/delete/:id",async(req,res)=>{
  const id=req.params.id
   try{
      const  newfollowup=await followup.findByIdAndDelete({"_id":id})
      res.send(" new followup is deleted")
   }
   catch(err){
    res.send(" new followup is not deleted")
   }
})

module.exports=app