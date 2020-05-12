var createError = require('http-errors');
var express = require('express');
var cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//-----------------------------------
var database = require('./config/database')
var auth = require('./auth/mainAuth')
var employeesRouter = require('./routes/employees.router');
var usersRouter = require('./routes/users.router');
// mongo Connection
//const { mongoose } = require('./config/database');
//------------------------------------

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//----------------------------------
// mongo connection
database.mongoConnect()
app.use('/users', usersRouter)
app.use(auth)

// routes
app.use('/employees', employeesRouter)

//---------------------------------


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  res.send('error');
});

module.exports = app;
