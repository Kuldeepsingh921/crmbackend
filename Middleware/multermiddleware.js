const multer = require('multer');



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        const date = Date.now() 
        const email = req.body.email;
        const name = "p";
        let fileext = file.originalname.split('.').pop();
       
        // console.log(req.body,11)
        // cb(null,  date+"-"+file.originalname)
        cb(null,  email+"-"+name+"."+fileext)

    }
  });

    const fileFilter=(req,file,cb)=>{
        const allowedFileTypes=["image/jpeg","image/jpg","image/png","image/webp"]
        if(allowedFileTypes.includes(file.mimetype)){
            cb(null,true)
        }
        else{
            cb(
                new Error("please change your file type or filled type not support")
                ,false)
        }
    }

    const mustbe={
        storage:storage,
        fileFilter:fileFilter
    }
  
    const uploads = multer(mustbe)
    module.exports=uploads