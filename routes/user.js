var express = require('express');
var router = express.Router();
const { body } = require('express-validator');

/*** MIDDLEWARES ***/
const userRoutesMiddleware = require('../middlewares/userRoutesMiddleware')

/*** Validaciones ***/
const validateCreateForm = [
    body('name').notEmpty().withMessage('Debes completar el nombre').isLength({ min:5}).withMessage('El nombre debe tener al menos 5 caracteres'),
    body('phone').notEmpty().withMessage('Debes completar un numero valido').isInt().isLength({ min:10, max:10}).withMessage('El numero debe tener al menos 10 caracteres'),
    body('birth_dat').notEmpty().withMessage('Debes completar La fecha de nacimiento'),
    body('email').isEmail().withMessage('E-mail invalido'), 
    body('userCategory').notEmpty().withMessage('Debes seleccionar una categoría'),
    body('password').notEmpty().withMessage('Debes completar el password').isStrongPassword().withMessage('Minimo 8 caracteres y debe incluir mayúscula minúscula, símbolo y numero')
];


//// ************ Controller User ******
const userController = require('../controllers/userController');
const upload = require("../config/user_multer")


/* GET ALL USERS. */
router.get('/users', userController.usersIndex); 
/* CREATION USER FORM */
router.get('/register', userController.register); 

/*** GET ONE USER ***/ /*** USER MIDDLEWARES ***/ 
router.get('/users/detail/:id/', /* userRoutesMiddleware, */ userController.detail);

router.get('/login', userController.login);

/*** POSTING ONE USER: Processing register***/ 
router.post('/users/detail/:id/', upload.single('userImage'), validateCreateForm,  userController.store); 

module.exports = router;
