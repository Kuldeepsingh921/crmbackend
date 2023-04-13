const express=require("express")
const LeadsStatusModel = require("../Model/MasterLeadsStatus")
const app=express()

app.use(express.json())

app.get("/",async(req,res)=>{
    const value = req.query
    const leads= await LeadsStatusModel.find(value)
    res.send(leads)
})

app.post("/addleadstatus",async(req,res)=>{
    try{
    let lead= new LeadsStatusModel(req.body)
    await lead.save()
    res.send("lead added successfully")
    }catch(err){console.log(err.message)}
})

app.patch("/:id",async(req,res)=>{
    const id= req.params.id
    try{
    const leadUpdate= await LeadsStatusModel.findByIdAndUpdate({"_id":id},{...req.body})
    res.send("lead updated successfully")
    }catch(err){
        res.send("lead not updated")}
})

app.delete("/delete/:id",async(req,res)=>{
    const id= req.params.id
    try{
    const leadUpdate= await LeadsStatusModel.findByIdAndDelete({"_id":id})
    res.send("lead deleted successfully")
    }catch(err){
        console.log("lead not deleted")}
})

module.exports=app