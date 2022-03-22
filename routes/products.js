var express = require('express');
var router = express.Router();

//// ************ Controller Region ******
const categoryController = require('../controllers/categoryController');
var productsController = require('../controllers/productsController');
const upload = require("../config/multer")

router.get('/products', productsController.index);

/* GET product categories pages. */   
router.get('/bienestar',categoryController.bienestar);
router.get('/derma',categoryController.derma);
router.get('/diabetes',categoryController.diabetes);
router.get('/miBebe',categoryController.miBebe);
router.get('/nuestraMarca',categoryController.nuestraMarca); 
router.get('/promociones',categoryController.promociones); 
router.get('/mas',categoryController.mas); 

/*** GET ONE PRODUCT ***/ 
router.get('/products/detail/:id/', productsController.detail);

/*** CREATE ONE PRODUCT ***/ 
router.get('/products/create', productsController.create);
router.post('/products/create/', upload.any(), productsController.store); 



module.exports = router;
