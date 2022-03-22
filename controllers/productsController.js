const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const calcFinalPrice = (product) => product.price - (product.price * product.discount / 100) 

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('all_products', {products});
	},


	// Detail - Detail from one product
	detail: (req, res) => {
		let id = parseInt(req.params.id, 10)
		const product = products.find(p =>p.id === id)
		res.render('detail', {product:product, toThousand:toThousand, calcFinalPrice: calcFinalPrice })
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form')
	},
	
	// Create -  Method to store 
	store: (req, res) => {
		const newProduct = req.body
		console.log(req.file)
		newProduct.id= Date.now()
		newProduct.image = req.file.filename || 'default-image.png'
		products.push(req.body) 
		const productsJSON = JSON.stringify(products, null, 2) 
		fs.writeFileSync(productsFilePath, productsJSON)
		res.redirect('/products') // o un mensaje:   res.send('Producto creado con exito')//
		console.log(req.body)
	},


	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;