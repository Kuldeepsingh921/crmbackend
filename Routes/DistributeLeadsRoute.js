const express=require("express")

const app=express.Router()

app.use(express.json())

const excelleads=require("../Model/excelleadsModal")

const distributeLeads=require("../Model/DistributeLeadsModel")

const councellor=require("../Model/AddCounsellor")

const excelModal = require("../Model/excelleadsModal");

app.get("/:id",async(req,res)=>{
    const id=req.params.id
    try{
        const leads=await distributeLeads.find({$or:[{"userId":id},{"_id":id}]})
        res.send(leads).status(200)
    }
   catch(err){
    res.send(err).status(400)
   }

})





app.post("/leads",async(req,res)=>{
     const leads=await excelleads.find()
     const user=await councellor.find()
     const halfleads=Math.floor(leads.length/user.length)
     const distributedleads=await distributeLeads.find()

     console.log(typeof halfleads)

try{
    let i=distributedleads?distributedleads.length:0
     let j=0
     let sum=halfleads
  while(i<leads.length){
    if(i==sum){
        j++
        i++
        sum=sum+halfleads
    }
    else{
        const distribute=new distributeLeads({name:leads[i].name,email:leads[i].email,phoneno:leads[i].mobileno,assignedto:user[j].name,userId:user[j]._id})
        await distribute.save()
       i++
    }
}
}
catch(err){
res.send("hello piyush " + err).status(400)

}
})

app.post("/manuallyleads",async(req,res)=>{
    const leads=req.body
    // const {_id,name}=leads.counsellor
console.log(leads.user.length)
console.log(leads.user)
    for(i=0;i<leads.user.length;i++){
        const leaduser=await excelModal.findByIdAndUpdate({"_id":leads.user[i]._id})
        const leadassigned=await excelModal.findByIdAndUpdate({"_id":leads.user[i]._id},{name:leads.user[i].name,email:leads.user[i].email,phoneno:leads.user[i].mobileno,assignedto:leads.counsellor.name})
        await leadassigned.save()
        const distribute=new distributeLeads({name:leads.user[i].name,email:leads.user[i].email,phoneno:leads.user[i].mobileno,assignedto:leads.counsellor.name,userId:leads.counsellor._id,enquirydate:leads.user[i].created_at
            })
        await distribute.save()
    }
    res.send("leads assigned")
})

app.patch("/:id",async(req,res)=>{
    const id=req.params.id

    try{
        const distribute=await distributeLeads.findByIdAndUpdate({"_id":id},{...req.body}, { new: true })
        await distribute.save()
        res.send("user is updated").status(200)
    }
    catch(err){
        res.send("leads is not updated").status(400)
    }
})


module.exports=app