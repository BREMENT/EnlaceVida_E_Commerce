const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const calcFinalPrice = (product) => product.price - (product.price * product.discount / 100) 

const controller = {
	// Root - Show all products
	bienestar: (req, res) => {
		const visited = products.filter(product => product.category === 'visited' && product.categoryProduct==='bienestar')
		const inSale = products.filter(product => product.category === 'in-sale' && product.categoryProduct==='bienestar')
		res.render('bienestar', {visited: visited, inSale:inSale})
	},
	derma: (req, res) => {
		const visited = products.filter(product => product.category === 'visited' && product.categoryProduct === 'derma')
		const inSale = products.filter(product => product.category === 'in-sale' && product.categoryProduct === 'derma')
		console.log({visited, inSale})
		res.render('derma', {visited: visited, inSale:inSale})
	},

	diabetes: (req, res) => {
		const visited = products.filter(product =>product.category === 'visited' && product.categoryProduct === 'diabetes')
		const inSale = products.filter(product => product.category === 'in-sale' && product.categoryProduct === 'diabetes')
		console.log({visited, inSale})
		res.render('diabetes', {visited: visited, inSale:inSale})
	},
	miBebe: (req, res) => {
		const visited = products.filter(product => product.category === 'visited' && product.categoryProduct === 'miBebe')
		const inSale = products.filter(product => product.category === 'in-sale'&& product.categoryProduct === 'miBebe')
		console.log({visited, inSale})
		res.render('miBebe', {visited: visited, inSale:inSale})
	},
	nuestraMarca: (req, res) => {
		const visited = products.filter(product => product.category === 'visited')
		const inSale = products.filter(product => product.category === 'in-sale')
		console.log({visited, inSale})
		res.render('nuestraMarca', {visited: visited, inSale:inSale})
	},
	promociones: (req, res) => {
		const visited = products.filter(product => product.category === 'visited')
		const inSale = products.filter(product => product.category === 'in-sale')
		console.log({visited, inSale})
		res.render('promociones', {visited: visited, inSale:inSale})
	},
	mas: (req, res) => {
		const visited = products.filter(product => product.category === 'visited')
		const inSale = products.filter(product => product.category === 'in-sale')
		console.log({visited, inSale})
		res.render('mas', {visited: visited, inSale:inSale})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let id = parseInt(req.params.id, 10)
		const product = products.find(p =>p.id === id)
		res.render('detail', {product:product, toThousand:toThousand, calcFinalPrice: calcFinalPrice })
	}


};

module.exports = controller;