const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/Excel')
    },
    filename: function (req, file, cb) {
        const date = Date.now() 
        cb(null,  date+"-"+file.originalname)
    }
  });


    const mustbe={
        storage:storage
    }
  
    const exceluploads = multer(mustbe)
    module.exports=exceluploads