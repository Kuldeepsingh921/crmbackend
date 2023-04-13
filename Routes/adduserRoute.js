const express=require("express")

const app=express.Router()

const authentication=require("../Middleware/authentication")

const adduserModel=require("../Model/adduser")

const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(express.json())

app.use(authentication)

app.get("/",(req,res)=>{
    res.send("adduser is here")
})

app.post("/createuser",async(req,res)=>{
    const {firstname,lastname,email,password,phonenumber,designation,roles}=req.body
    
   try{
    bcrypt.hash(password, saltRounds, async(err, hash)=> {
        const adduser=new adduserModel({...req.body,password:hash})
        await adduser.save()
        res.send("user is created")
    });
         }
   catch(err){
    res.send("user is not created")
   }
})

module.exports=app