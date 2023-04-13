const express=require("express")

const app=express.Router()

const source=require("../Model/masterSourceModal")

app.use(express.json())

app.get("/",async(req,res)=>{
  const value=req.query
   const data=await source.find(value)
   res.send(data)
})

app.post("/addsource",async(req,res)=>{
  try{
      const newsource=new source(req.body)
      await newsource.save()
      res.send("source is created")
  }
  catch(err){
    res.send("new source is not created")
  }
})

app.patch("/:id",async(req,res)=>{
  const id=req.params.id
  try{
    const  newsource=await source.findByIdAndUpdate({"_id":id},{...req.body},{new:true})
    res.send(" new source is updated")
  }
  catch(err){
    res.send("source is not changed")
  }

})

app.delete("/delete/:id",async(req,res)=>{
  const id=req.params.id
   try{
      const  newsource=await source.findByIdAndDelete({"_id":id})
      res.send(" new source is deleted")
   }
   catch(err){
    res.send(" new source is not deleted")
   }
})

module.exports=app