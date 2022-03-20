//
//  local strategy
//  requires JS for grabbing login info from login page
//
//

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
var User = require('../models/User');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  async function(email, password, done) {
    var user = await User.findOne(
      { where: {
          email: email
        }
      });
    if (user == null) {
      return done(null, false, { message: 'Incorrect email.' });
    }
    if (!user.validPassword(password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  }
));

module.exports = passport;

//        alternate (older) local strategy
//
//    passport.use(new LocalStrategy(
//    function(username, password, done) {
//      User.findOne({ username: username }, function (err, user) {
//        if (err) { return done(err); }
//        if (!user) { return done(null, false); }
//        if (!user.verifyPassword(password)) { return done(null, false); }
//        return done(null, user);
//      });
//    }
//  ));