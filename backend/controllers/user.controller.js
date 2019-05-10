//const mongoose = require('mongoose');
//const passport = require('passport');
//const _ = require('lodash');
const jwt = require('jsonwebtoken');
//console.log(jwt);
//const User = mongoose.model('User');

/*module.exports.register = (req, res, next) => {
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}*/
module.exports.getusers = (req,res,next) =>{
     userdata = {name :"varun" ,email : "vkumar@iris.com",name:"sujit",email : "sujit.kumar@irisofware.com"}
     res.status(200).json({ user: userdata });
}
module.exports.authenticate = (req, res, next) => {
     const data = req.body;
     console.log(req.body);
     if (true) {
        const token = jwt.sign({ email: data.email }, "This should be a longer string")
        res.status(200).json({ token: token });
    }
    // call for passport authentication
    /*passport.authenticate('local', (err, user, info) => {       
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);*/
}

/*module.exports.userProfile = (req, res, next) =>{
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, user : _.pick(user,['fullName','email']) });
        }
    );
}*/