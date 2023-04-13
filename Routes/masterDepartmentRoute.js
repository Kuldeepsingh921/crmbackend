const express=require("express")

const app=express.Router()

const department=require("../Model/masterDepartmentModal")

app.use(express.json())

app.get("/",async(req,res)=>{
  const value=req.query
   const data=await department.find(value)
   res.send(data)
})

app.post("/adddepartment",async(req,res)=>{
  try{
      const newdepartment=new department(req.body)
      await newdepartment.save()
      res.send("department is created")
  }
  catch(err){
    res.send("new department is not created")
  }
})

app.patch("/:id",async(req,res)=>{
  const id=req.params.id
  try{
    const  newdepartment=await department.findByIdAndUpdate({"_id":id},{...req.body},{new:true})
    res.send(" new department is updated")
  }
  catch(err){
    res.send("department is not changed")
  }

})

app.delete("/delete/:id",async(req,res)=>{
  const id=req.params.id
   try{
      const  newdepartment=await department.findByIdAndDelete({"_id":id})
      res.send(" new department is deleted")
   }
   catch(err){
    res.send(" new department is not deleted")
   }
})

module.exports=app