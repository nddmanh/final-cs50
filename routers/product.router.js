var express = require('express');

var controller = require('../controllers/product.controller');
var authMiddleware = require('../middleware/auth.middleware');

var product = express.Router();

product.get('/prod', authMiddleware.requireAuth, controller.prod);

product.get('/loading',  controller.load);

product.get('/:id', authMiddleware.requireAuth, controller.detail);


// prod.post('/login', controller.postLogin);

module.exports = product;