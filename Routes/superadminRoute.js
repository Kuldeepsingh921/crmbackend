const express = require("express");

const app = express.Router();

const superModel = require("../Model/SuperModel");
const authentication=require("../Middleware/authentication") 
const bcrypt = require("bcrypt");
const saltRounds = 10;

var jwt = require("jsonwebtoken");

const upload = require("../Middleware/multermiddleware");

app.use(express.json());

app.get("/", async (req, res) => {
  const user = await superModel.find();
  res.send(user);
});

app.get("/:id", async (req, res) => {
  const id=req.params.id
  const user = await superModel.findById({"_id":id});
  res.send(user);
});

app.post("/register", (req, res) => {
  const { name, email, password} = req.body;

  try {
    bcrypt.hash(password, saltRounds, async (err, hash) => {
      if (err) {
        res.send("super admin is not registered");
      } else {
        const superadmin = new superModel({
          name,
          email: email,
          password: hash,
        });
        await superadmin.save();
        res.send({ msg: "super admin is created" });
      }
    });
  } catch (err) {
    res.send({ msg: "user is not registered", err: err.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const superadmin = await superModel.findOne({ email });
    bcrypt.compare(password, superadmin.password, (err, result) => {
      if (result) {
        const token = jwt.sign({ userId: superadmin._id }, "login");
        res.send({ msg: "login successfully", token: token });
      } else {
        res.send({ msg: "please enter valid credentials" });
      }
    });
  } catch (err) {
    res.send({ msg: "please enter valid credentials" });
  }
});

app.patch("/:id", upload.single("image"), async (req, res) => {
  
  
  const id = req.params.id;
  const { firstname, email,city,postalcode,UserId, password, address, zipcode, country } =
    req.body;
    

  
  const user = await superModel.find({ _id:id });
  
  
  if (user) {
    
    if (req.file) {
      const path = req.file.path;
          const superadmin = await superModel.findByIdAndUpdate(
            { _id: id },
            {
              name: firstname,
              email: email,
              city: city,
              address: address,
              country: country,
              zipcode: postalcode,
              image: path,
              UserId: UserId,
            }
          );
          await superadmin.save();
         
          res.send({ msg: "super admin is created" });
           
    }
    else if(req.file === undefined){
   
      const superadmin = await superModel.findByIdAndUpdate(
        { _id: id },
        {
          name: firstname,
          email: email,
          city: city,
          address: address,
          country: country,
          zipcode: postalcode,
          UserId: UserId,
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
          const superadmin = await superModel.findByIdAndUpdate(
            { _id: id },
            {
              firstname: firstname,
              lastname: lastname,
              email: email,
              password: hash,
              address: address,
              zipcode: zipcode,
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

module.exports = app;
