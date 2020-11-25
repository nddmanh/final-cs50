require('dotenv').config();

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');

var userRoute = require('./routers/user.router');
var authRoute = require('./routers/auth.router');
var productRoute = require('./routers/product.router');
var adminRoute = require('./routers/admin.router');

var port = 3000;

var app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET));
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use("/stylesheets", express.static(__dirname + "/stylesheets"));
app.use("/javascripts", express.static(__dirname + "/javascripts"));

app.use(morgan('combined'));
// var ejs = require('ejs');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/users', userRoute);
app.use('/auth', authRoute);
app.use('/product', productRoute);
app.use('/admin', adminRoute);

app.get('/', function(req, res) {
  res.render('home', {title: "Trang chủ"} );
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// app.locals.db = require('./db.json');