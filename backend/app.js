var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const menuRouter = require('./routes/menu');

var app = express();

const url = "mongodb://localhost:27017/menu";
mongoose.connect(url);

const db = mongoose.connection;

db.on('open', () => {
  console.log('Conexion Ok');
});

db.on('error', () => {
  console.log('No se pudo conectar a la db');
});

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({type: "*/*"}));
app.use(cors());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'frontend')));

app.use('/', menuRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.error('Error 404:', req.url);
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);

});

module.exports = app;
