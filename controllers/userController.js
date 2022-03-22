const {validationResult} = require('express-validator');
const jsonTable = require('../data/jsonTable');
const usersModel = jsonTable('users');

module.exports = {
    // GET ALL USERS
    usersIndex: (req, res) => {
		let users = usersModel.all()
        res.render('users', {users});
    },

	register: (req, res) => {
		return res.render('register');
	},

	//	STORE VERSION 2 	// Create -  Method to store // 
	store: (req, res) => {
		const resultValidation = validationResult(req);
	if (resultValidation.errors.length > 0) {
		//return res.send(resultValidation.mapped())   Se imprime un objeto con sus propiedades que a su vez son objetos  //errors: resultValidation.array(), Me lo trae en forma de array sin las propiedades 
		return res.render('register',{
			errors: resultValidation.mapped(),
			oldData:req.body
		});
	}
	},
// // termina STORE VERSION 2

	//	STORE VERSION 1 	// Create -  Method to store // 
// store: (req, res) => {
// 		//	user.image = req.file.filename || 'default-image.png'  NO VOLVER A PONER INTERFIERE CON LA IMPRESION
// 		 const errors=validationResult(req); //erroes antes validationREsult -->  es un array []
// 		if(errors.isEmpty()) { // Si el array de errores esta vacio vamos a hacer esto// tambien puede ser if(errors.length>0())
// 		const user = req.body;
// 		userId=usersModel.create(user);
//    		res.redirect('/users/detail/'+ userId);
// 		}
// 		else{
// 		// res.render('register', {errors: errors.mapped()});
//         res.render('register', {errors: errors.array(), old:req.body});
// 		console.log(errors.array())
// 		console.log( {errors: errors.array()})
	
// 		//res.send({ errors: errors.array()});
// 		// res.send(errors);
		
//         }},

// // termina STORE VERSION 1


// // 2 CODIGOS DE PRUEBA PARA CACHAR ERRORS
// 	// const errors=validationResult(req); res.send(errors);
// 	//console.log(errors)
// },

	// 	const errors=validationResult(req);
	// 	if(errors.isEmpty()) { // Si errores no esta vacio vamos a hacer esto//
	// 		 return res.status(400).json({ errors: errors.array()});
	// 		 } res.send({sucess:true});
	// },
		// Detail - ONE USER
	detail: (req, res) => {
		let user = usersModel.find(req.params.id);
		res.render('userDetail', { user });
		},
    	
    login: (req, res) => {
		res.render('login');
	}
	// CODIGO PARA LOGIN VALIDACIONES 
		// const userController = {
		// 	login: (req, res) => {
		// 	const errores = validationResult(req);
		// 	if (!errores.isEmpty()==false) {
		// 		res.render('login', {errores: errores.array()})
		// 	}
		// 	else {
		// 	//Chequear los errores acá, redirigir si hay errores
		// 	res.render('login', {errores:errores.mapped(), old:req.body}) } 
		
		// 	if (req.body.name == 'admin' && req.body.pass == 123) {
		// 		res.redirect('/dashboard');
		// 	}
		// 	}  
		// }


	//
}