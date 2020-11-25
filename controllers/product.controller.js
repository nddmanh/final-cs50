var express = require('express');
var db = require('../db');

module.exports.prod = function(req, res) {
    var page = parseInt(req.query.page) || 1;
    var perPage = 6;

    var start = (page - 1) * perPage;
    var end = page * perPage;

    res.render('products/prod', {
        title: "sản phẩm",
        prod: db.get('product').value().slice(start,end)

    });
};

module.exports.load = function(req, res) {
    res.render('products/loading', {
        title: "loading"
    });
};

module.exports.detail = function(req,res) {
    var id = req.params.id;
  
    var prod = db.get('product').find( { id: id} ).value();
    res.render('products/detail', {
        prod: prod,
        title: "chi tiết sản phẩm"
    });
};
