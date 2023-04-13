const express=require("express")

const app=express.Router()

const state=require("../Model/masterStateModal")

app.use(express.json())

app.get("/",async(req,res)=>{
  const value=req.query
   const data=await state.find(value)
   res.send(data)
})

app.post("/addstate",async(req,res)=>{
  try{
      const newstate=new state(req.body)
      await newstate.save()
      res.send("state is created")
  }
  catch(err){
    res.send("new state is not created")
  }
})

app.patch("/:id",async(req,res)=>{
  const id=req.params.id
  try{
    const  newstate=await state.findByIdAndUpdate({"_id":id},{...req.body},{new:true})
    res.send(" new state is updated")
  }
  catch(err){
    res.send("state is not changed")
  }

})

app.delete("/delete/:id",async(req,res)=>{
  const id=req.params.id
   try{
      const  newstate=await state.findByIdAndDelete({"_id":id})
      res.send(" new state is deleted")
   }
   catch(err){
    res.send(" new state is not deleted")
   }
})

module.exports=app