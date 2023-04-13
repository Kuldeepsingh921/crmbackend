const express=require("express")

const app=express.Router()

const tax=require("../Model/TaxModel")

app.use(express.json())

app.get("/",async(req,res)=>{
  const value=req.query
   const data=await tax.find(value)
   res.send(data)
})

app.post("/addtax",async(req,res)=>{
  try{
      const newtax=new tax(req.body)
      await newtax.save()
      res.send("tax is created")
  }
  catch(err){
    res.send("new tax is not created")
  }
})

app.patch("/:id",async(req,res)=>{
  const id=req.params.id
  try{
    const  newtax=await tax.findByIdAndUpdate({"_id":id},{...req.body},{new:true})
    res.send(" new tax is updated")
  }
  catch(err){
    res.send("tax is not changed")
  }

})

app.delete("/delete/:id",async(req,res)=>{
  const id=req.params.id
   try{
      const  newtax=await tax.findByIdAndDelete({"_id":id})
      res.send(" new tax is deleted")
   }
   catch(err){
    res.send(" new tax is not deleted")
   }
})

module.exports=app