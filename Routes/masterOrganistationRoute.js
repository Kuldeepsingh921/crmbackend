const express=require("express")

const app=express.Router()

const organisation=require("../Model/masterOrganisation")

app.use(express.json())

app.get("/",async(req,res)=>{
  const value=req.query
   const data=await organisation.find(value)
   res.send(data)
})

app.post("/addorganisation",async(req,res)=>{
  try{
      const neworganisation=new organisation(req.body)
      await neworganisation.save()
      res.send("organisation is created")
  }
  catch(err){
    res.send("new organisation is not created")
  }
})

app.patch("/:id",async(req,res)=>{
  const id=req.params.id
  try{
    const  neworganisation=await organisation.findByIdAndUpdate({"_id":id},{...req.body},{new:true})
    res.send(" new organisation is updated")
  }
  catch(err){
    res.send("organisation is not changed")
  }

})

app.delete("/delete/:id",async(req,res)=>{
  const id=req.params.id
   try{
      const  neworganisation=await organisation.findByIdAndDelete({"_id":id})
      res.send(" new organisation is deleted")
   }
   catch(err){
    res.send(" new qualification is not deleted")
   }
})

module.exports=app