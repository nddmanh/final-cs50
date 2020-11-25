var db = require('../db');


module.exports.postCreate = function(req, res, next ){
    var errors = [];
    // var email = req.body.email;
    // var name = req.body.name;
    // var phone = req.body.phone;
    // var user = db.get('users').find({ email: email }).value();

    // if(user.email == email) {
    //     errors.push('Email Exits');
    // }
// find({ name: name }).find({ phone: phone }).
//     if(user.name == name) {
//         errors.push('Name Exits');
//     }

//     if(user.phone == phone) {
//         errors.push('Phone Exits');
//     }

    if (!req.body.name) {
        errors.push('Name is required.');
    }
    if (!req.body.phone) {
        errors.push('Phone is required.');
    }
    if (!req.body.email) {
        errors.push('email is required.');
    }
    if (!req.body.password) {
        errors.push('password is required.');
    }
    if (errors.length) {
        res.render('users/create', {
            errors: errors,
            values: req.body
        });
        return;
    }

    next();
}
