const express=require("express")

const app=express.Router()

const country=require("../Model/masterCountry")

app.use(express.json())

app.get("/",async(req,res)=>{
  const value=req.query
   const data=await country.find(value)
   res.send(data)
})

app.post("/addcountry",async(req,res)=>{
  try{
      const newcountry=new country(req.body)
      await newcountry.save()
      res.send("country is created")
  }
  catch(err){
    res.send("new country is not created")
  }
})

app.patch("/:id",async(req,res)=>{
  const id=req.params.id
  try{
    const  newcountry=await country.findByIdAndUpdate({"_id":id},{...req.body},{new:true})
    res.send(" new country is updated")
  }
  catch(err){
    res.send("country is not changed")
  }

})

app.delete("/delete/:id",async(req,res)=>{
  const id=req.params.id
   try{
      const  newcountry=await country.findByIdAndDelete({"_id":id})
      res.send(" new country is deleted")
   }
   catch(err){
    res.send(" new country is not deleted")
   }
})

module.exports=app