var express = require('express');

var md5 = require('md5');
var db = require('../db');

module.exports.login = function(req, res) {
    res.render('auth/login', {title : "Đăng Nhập"});
};

module.exports.postLogin = function(req, res) {

    var email = req.body.email;
    var password = req.body.password;

    var user = db.get('users').find({ email: email }).value();

    if(!user) {
        res.render('auth/login', {
            errors: [
                'User does not exit.'
            ]
        });
        return;
    }

    var hashedPassword = md5(password);

    console.log(hashedPassword);
    if(user.password !== hashedPassword) {
        res.render('auth/login', {
            errors: [
                'Wrong password.'
            ]
        });
        return;
    }

    res.cookie('userId', user.id), {
        signed: true
    };
    res.redirect('/product/prod');
};

