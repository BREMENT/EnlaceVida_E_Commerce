var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//Routes
var userRouter = require('./routes/user');
var productsRouter = require('./routes/products');
var homeRouter = require('./routes/home');
// Middleware
var userlogs = require('./middlewares/logmiddleware');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //Este middleware me permite recibir la info que viaja a traves de un formulario a traves de POST en req.body//
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', userlogs, homeRouter); 
app.use('/', productsRouter);
app.use('/', userRouter);

// catch 404 and forward to error handler FORMA ORIGINAL  app.use(function(req, res, next) {next(createError(404)); });   //
// app.use((req, res, next)=> { res.status(404).render('error'); next() });

// // error handler
// // app.use(function(err, req, res, next) {
// //   // set locals, only providing error in development
// //   res.locals.message = err.message;
// //   res.locals.error = req.app.get('env') === 'development' ? err : {};

// //   // render the error page
// //   res.status(err.status || 500);
// //   res.render('error');
// // });

app.listen(8080, () => {console.log('servidor corriendo en puerto 8080')})

module.exports = app;
