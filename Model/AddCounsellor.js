const mongoose = require("mongoose");

const CounsellorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {type: String, required: true  },
  password: { type: String, required: false, minlength: 3, maxlength: 1024 },
  phone :{ type: String, required:false },
  web: { type: String, required: true},
  address:{type:String,required:false},
  zipcode:{type:String,required:false},
  country:{type:String,required:false},
  city:{type:String,required:false},
  role: { type: String, default:"counsellor"  },
  image:{type:String,required:false},
  userId:{type:String,required:false}
  //SuperAdminId:{ type:mongoose.Schema.Types.ObjectId, ref:"superadmin",required:true },

},

{
    timestamps:true,
    versionKey:false
});

const CounsellorModel = mongoose.model("counsellor", CounsellorSchema);

module.exports = CounsellorModel;
