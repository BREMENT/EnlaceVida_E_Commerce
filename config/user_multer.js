const multer = require('multer');
const path= require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/users')
    },
    // filename: function (req, file, cb) {
    //     cb(null, 'img-' + + Date.now()+ file.originalname)
    //     console.log(file)
    //     console.log(file.name)
    //     console.log(file.originalname)
    // }
    filename:  (req, file, cb) => {
        console.log(file)
        let filename= `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null,filename)
    }
})

const upload = multer({stor:storage})

module.exports = upload 



