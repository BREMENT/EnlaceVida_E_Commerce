const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/products')
    },
    filename: function (req, file, cb) {
        console.log(file)
        console.log(file.name)
        console.log(file.originalname)

        cb(null, 'img-' + file.originalname)
    }
})

const upload = multer({storage:storage})

module.exports = upload 



