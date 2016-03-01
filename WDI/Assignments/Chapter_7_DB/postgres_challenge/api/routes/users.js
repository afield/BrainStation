var express = require('express');
var models = require('./../models/');
//endpoint: http://localhost:8080/users
app.get('/users',function(req,res){
    models.Users.findAll().then(function(users){
        res.json(users);
    })
})

//endpoint: http://localhost:8080/users/:name
app.get('/users/:name', function(req,res){
    var user = {
        name:req.params.name,
        email:'test@test.com',
        password:'123'
    }
    
    models.Users.create(user).then(function(user){
        res.json(user);
    })
})