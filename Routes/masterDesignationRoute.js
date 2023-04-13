const express=require("express")

const app=express.Router()

const designation=require("../Model/DesignationModal")

// console.log(designation)

app.use(express.json())

app.get("/",async(req,res)=>{
  const value=req.query
   const data=await designation.find(value)
   res.send(data)
  // res.send(value)
})

app.post("/adddesignation",async(req,res)=>{
    const newcaurse = new designation(req.body)
      await newcaurse.save()
      res.send("designation is created")
})

app.patch("/:id",async(req,res)=>{
  const id=req.params.id
  try{
    const newcaurse=await designation.findByIdAndUpdate({"_id":id},{...req.body},{new:true})
    res.send("designation is updated")
  }
  catch(err){
    res.send("designation is not changed")
  }

})

app.delete("/delete/:id",async(req,res)=>{
  const id=req.params.id
   try{
      const newcaurse=await designation.findByIdAndDelete({"_id":id})
      res.send("designation is deleted")
   }
   catch(err){
    res.send("designation is not deleted")
   }
})

module.exports=app