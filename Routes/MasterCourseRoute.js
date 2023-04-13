const express=require("express")

const app=express.Router()

const course=require("../Model/MasterCourse")

// console.log(course)

app.use(express.json())

app.get("/",async(req,res)=>{
  const value=req.query
   const data=await course.find(value)
   res.send(data)
  // res.send(value)
})

app.post("/addcourse",async(req,res)=>{
    const newcaurse = new course(req.body)
      await newcaurse.save()
      res.send("course is created")
})

app.patch("/:id",async(req,res)=>{
  const id=req.params.id
  try{
    const newcaurse=await course.findByIdAndUpdate({"_id":id},{...req.body},{new:true})
    res.send("course is updated")
  }
  catch(err){
    res.send("course is not changed")
  }

})

app.delete("/delete/:id",async(req,res)=>{
  const id=req.params.id
   try{
      const newcaurse=await course.findByIdAndDelete({"_id":id})
      res.send("course is deleted")
   }
   catch(err){
    res.send("course is not deleted")
   }
})

module.exports=app