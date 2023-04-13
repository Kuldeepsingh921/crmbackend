const express=require("express")

const app=express.Router()

const bankModel=require("../Model/MasterBankAccount")

app.use(express.json())

app.get("/",async(req,res)=>{
  const value=req.query
   const data=await bankModel.find(value)
   res.send(data)
})
     
app.post("/addaccount",async(req,res)=>{
  try{
      const newAccount=new bankModel(req.body)
      await newAccount.save()
      res.send("New account is created")
  }
  catch(err){
    res.send("account is not created")
  }
})

app.patch("/:id",async(req,res)=>{
  const id=req.params.id
  try{
    const  updatedaccount=await bankModel.findByIdAndUpdate({"_id":id},{...req.body},{new:true})
    res.send(" account is updated")
  }
  catch(err){
    res.send("account not updated")
  }

})

app.delete("/delete/:id",async(req,res)=>{
  const id=req.params.id
   try{
      const  accountDeleted=await bankModel.findByIdAndDelete({"_id":id})
      res.send("account is deleted")
   }
   catch(err){
    res.send("account is not deleted")
   }
})

module.exports=app