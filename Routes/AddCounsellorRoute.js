const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;

const express = require("express");
const app = express.Router()
const  CounsellorModel  = require("../Model/AddCounsellor");
const authentication = require("../Middleware/authentication");


const upload = require("../Middleware/multermiddleware");

app.get("/", async (req, res) => {

  try {
   
    let counsellors = await CounsellorModel.find();
    return res.status(200).send(counsellors);
  } 
    catch (error) {

    res.status(500).send("Error: " + error.message);
  }
});

app.get("/:id", async (req, res) => {
  const id=req.params.id
  const user = await CounsellorModel.findById({"_id":id});
  res.send(user).status(200);
});

app.post("/createcounsellor",authentication, async (req, res) => {
    const {name,email,password,phone,web}=req.body
    const user=await CounsellorModel.findOne({email})
   
    try{
      if(user){
        res.send("councellor is not present").status(400)
      }
      else{
        bcrypt.hash(password, saltRounds, async(err, hash)=> {
          const counsellor=new CounsellorModel({name,email,password:hash,phone,web})
          await counsellor.save()
          res.send("counseller is created").status(200)
      });
      }
    }
    catch(err){
      res.send("Invalid User").status(500)
    }
    
});

// app.patch("/:id",async(req,res)=>{
//   const id=req.params.id;
//   try{
//     const updatedCounsellor=await CounsellorModel.findByIdAndUpdate({"_id":id},{...req.body})
//   res.send("Updated the counsellor")
//   }catch(err){
//     res.send("counsellor not updated")
//   }
// })

app.post("/login", async (req, res) => {

  let counsellor = await CounsellorModel.findOne({ email: req.body.email.toLowerCase()});

  if(!counsellor){
      return res.status(400).send("Invalid email or password...");
    }

  if(counsellor){
    
    const validPassword = await bcrypt.compare(req.body.password, counsellor.password);
    if (!validPassword)
    return res.status(400).send("Invalid email or password...");
        
    const token = jwt.sign(
      {
        _id: counsellor._id,
        name: counsellor.name,
        phone: counsellor.phone,
        email: counsellor.email,
        web : counsellor.web,
        role: counsellor.role,
      }
      );
      
      res.send(token);
    }
});

app.patch("/:id", upload.single("image") ,async (req, res) => {
  console.log("counsellor")
  const id = req.params.id;
  console.log(id,96);
  console.log(req.body,97);
  const { firstname, email,city,postalcode, address, zipcode, country,web} =
    req.body;
    console.log(req.body)

  
  const user = await CounsellorModel.find({ _id:id });
  
  
  if (user) {
    
    if (req.file) {
      const path = req.file.path;
          const superadmin = await CounsellorModel.findByIdAndUpdate(
            { _id: id },
            {
              name: firstname,
              email: email,
              city: city,
              address: address,
              country: country,
              zipcode: postalcode,
              image: path,
              web:web,
            }
          );
          await superadmin.save();
         
          res.send({ msg: "super admin is created" });
           
    }
    else if(req.file === undefined){
   
      const superadmin = await CounsellorModel.findByIdAndUpdate(
        { _id: id },
        {
          name: firstname,
          email: email,
          city: city,
          address: address,
          country: country,
          web:web,
          zipcode: postalcode,
        }
      );
      await superadmin.save();
      
      res.send({ msg: "super admin is created" });
       
    }
    
    else {
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          res.send("super admin is not registered");
        } else {
          const superadmin = await CounsellorModel.findByIdAndUpdate(
            { _id: id },
            {
              firstname: firstname,
              lastname: lastname,
              email: email,
              password: hash,
              address: address,
              web:web,
              zipcode: postalcode,
              country: country,
            }
          );
          await superadmin.save();
          console.log(superadmin,118)
          res.send({ msg: "super admin is created" });
        }
      });
    }
  } else {
    res.send("This email is already exist");
  }
});



module.exports = app 
