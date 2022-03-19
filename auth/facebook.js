var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../models/user');

passport.use(new FacebookStrategy({
    clientID: "493298485579958",
    clientSecret: "fdab79ea6e8cb5a2a9f8a72ceb83e727",
    callbackURL: "http://localhost:3001/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({name: profile.displayName}, {name: profile.displayName,userid: profile.id}, function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));

module.exports = passport;