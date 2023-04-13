const express=require("express")

const app=express.Router()

const subjectModel=require("../Model/MasterSubjectModel")

app.use(express.json())

app.get("/",async(req,res)=>{
  const value=req.query
   const data=await subjectModel.find(value)
   res.send(data)
})

app.post("/addsubject",async(req,res)=>{
  try{
      const newSubject=new subjectModel(req.body)
      await newSubject.save()
      res.send("subject is created")
  }
  catch(err){
    res.send("subject  not created")
  }
})

app.patch("/:id",async(req,res)=>{
  const id=req.params.id
  try{
    const  updatedSubject=await subjectModel.findByIdAndUpdate({"_id":id},{...req.body},{new:true})
    res.send(" new subject is updated")
  }
  catch(err){
    res.send("subject is not changed")
  }

})

app.delete("/delete/:id",async(req,res)=>{
  const id=req.params.id
   try{
      const  subjectDeleted=await subjectModel.findByIdAndDelete({"_id":id})
      res.send(" new subject is deleted")
   }
   catch(err){
    res.send(" new subject is not deleted")
   }
})

module.exports=app