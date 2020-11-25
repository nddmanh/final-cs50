var db = require('../db');


module.exports.postAdmin = function(req, res, next ){
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
    if (!req.body.cost) {
        errors.push('Cost is required.');
    }

    if (errors.length) {
        res.render('admin', {
            errors: errors,
            values: req.body,
            title: "Adminstrator"
        });
        return;
    }

    next();
}
