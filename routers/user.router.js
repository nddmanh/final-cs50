var express = require('express');

var controller = require('../controllers/user.controller');
var validate = require('../validate/user.validate');
var authMiddleware = require('../middleware/auth.middleware');

var router = express.Router();

router.get('/create', controller.create);

router.get('/done', controller.done);

router.post('/create', validate.postCreate, controller.postCreate);

module.exports = router;