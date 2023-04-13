const express=require("express")

const app=express.Router()

const cityModel=require("../Model/MasterCityModel")

app.use(express.json())

app.get("/",async(req,res)=>{
  const value=req.query
   const data=await cityModel.find(value)
   res.send(data)
})
app.post("/addcity",async(req,res)=>{
  try{
      const newCity=new cityModel(req.body)
      await newCity.save()
      res.send("New city is created")
  }
  catch(err){
    res.send("city is not created")
  }
})

app.patch("/:id",async(req,res)=>{
  const id=req.params.id
  try{
    const  updatedCity=await cityModel.findByIdAndUpdate({"_id":id},{...req.body},{new:true})
    res.send(" city is updated")
  }
  catch(err){
    res.send("city not updated")
  }

})

app.delete("/delete/:id",async(req,res)=>{
  const id=req.params.id
   try{
      const  cityDeleted=await cityModel.findByIdAndDelete({"_id":id})
      res.send("city is deleted")
   }
   catch(err){
    res.send("city is not deleted")
   }
})

module.exports=app