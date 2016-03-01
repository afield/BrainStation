angular.module('sampleApp', ['ui.router', 'apiRoutes']);

var express = require('express');
var mongoose = require('mongoose');
app = express();


mongoose.connect('mongodb://localhost/data/db/');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Connected to db at /data/db/")
});

var CoffeeShop = require('./../api/models/CoffeeShop');

var newCoffeeShop = CoffeeShop(
    {
        name: "Quantum 3",
        address: "463 King St. West",
        rating: 4
    }
);

newCoffeeShop.save(function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log('User created!');
    }
});

CoffeeShop.find({}, function(err, coffeeShops) {
    if (err) {
        console.log(err);
    } else {
        console.log(coffeeShops);
    }
});

