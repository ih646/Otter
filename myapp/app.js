var express = require('express');
const db = require('./dbs')
const routes = require('./routes')


//dependencies
var mongoose = require('mongoose');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var auth = require('./routes/auth');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

    





db().then(dbs => {
    // Initialize the application once database connections are ready.
    routes(app, dbs).listen(3000, () => console.log('Listening on port 3000'))
}).catch(err => {
    console.error('Failed to make all database connections!')
    console.error(err)
    process.exit(1)
})





// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });
// app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.send('error');
//     console.log(err);
// });
// app.use(function(err, req, res, next) {
//     res.status(err.status || 304);
//     res.send('error');
//     console.log(err);
// });
// // error handler
// app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });

// app.listen(3000);

// module.exports = app;