var express = require('express');

const md5 = require('md5');
var shortid = require('shortid');

var db = require('../db');


module.exports.create = function(req, res) {
    res.render('users/create', {title: "Đăng ký"});
};

module.exports.done = function(req, res) {
    res.render('users/done', {title: "Dang ky thanh cong"});
};

module.exports.postCreate =function(req,res) {
    req.body.id = shortid.generate();
    req.body.password = md5(req.body.password);
    

    db.get('users').push(req.body).write();
    res.redirect('done' );
    
};