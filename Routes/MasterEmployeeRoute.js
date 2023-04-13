const express=require("express")

const app=express.Router()

const employeeModel=require("../Model/MasterEmployee")

app.use(express.json())

app.get("/",async(req,res)=>{
  const value=req.query
   const data=await employeeModel.find(value)
   res.send(data)
})
     
app.post("/addemployee",async(req,res)=>{
  try{
      const newemployee=new employeeModel(req.body)
      await newemployee.save()
      res.send("New employee is created")
  }
  catch(err){
    res.send("employee is not created",err.message)
  }
})

app.patch("/:id",async(req,res)=>{
  const id=req.params.id
  try{
    const  updatedEmployee=await employeeModel.findByIdAndUpdate({"_id":id},{...req.body},{new:true})
    res.send(" employee is updated")
  }
  catch(err){
    res.send("employee not updated")
  }

})

app.delete("/delete/:id",async(req,res)=>{
  const id=req.params.id
   try{
      const  employeeDeleted=await employeeModel.findByIdAndDelete({"_id":id})
      res.send("employee is deleted")
   }
   catch(err){
    res.send("employee is not deleted")
   }
})

module.exports=app