var express = require('express');
var multer = require('multer');

var controller = require('../controllers/admin.controller');
var validate = require('../validate/admin.validate');

// var upload = multer({ dest: './public/uploads/' });
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname )
    }
  })
  
var upload = multer({ storage: storage })

var admin = express.Router();

admin.get('/done-prod', controller.doneProd);

admin.get('/admin-upload', controller.admin);

admin.post('/admin-upload', 
    upload.single('avatar'), 
    validate.postAdmin, 
    controller.postAdmin
);

module.exports = admin;