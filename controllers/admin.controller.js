var express = require('express');

const md5 = require('md5');
var shortid = require('shortid');

var db = require('../db');

module.exports.doneProd = function(req, res) {
    res.render('products/done-prod', {title: "Upload data, Done!"});
};

module.exports.admin = function(req, res) {
    res.render('admin', {title: "Adminstrator"});
};

module.exports.postAdmin =function(req,res) {
    req.body.id = shortid.generate();
    req.body.avatar = req.file.path.split('\\').slice(1).join('\\');
    
    db.get('product').push(req.body).write();
    res.redirect('done-prod' );
    
};