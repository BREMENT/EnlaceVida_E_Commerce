var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { 
    title: 'Enlace de Vida Market', 
    username:'Brenda_Mendez'
  });
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});


module.exports = router;
