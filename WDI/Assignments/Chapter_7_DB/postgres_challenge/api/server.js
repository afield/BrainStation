//Express framework helps organize your app into an MVC structure
var express = require('express');
//Models hold the data structures to interact with data store
var models = require('./models');
//Formatting request objects that come in
var bodyParser = require('body-parser');
//Use all of the express methods for your app
var app = express();

app.use(bodyParser.json);
app.use(urlencoded({extended:false}));
app.use(express.static(__dirname + './../app/'));

//DEFINE ROUTES
var userRoutes = require('./routes/users');

app.use('/users',userRoutes);

//Connect to Local Host
models.sequelize.sync().then(function(){
    app.listen(8080,function(){
        console.log('Listening on http:/localhost:8080');
        console.log('Stop Server With CTRL + C');
    });
});

