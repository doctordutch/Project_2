var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../models/User');

passport.use(new GoogleStrategy({
    clientID: "390346120956-o7tvjnq9iqc3m41tuij3h1277uk8m68o.apps.googleusercontent.com",
    clientSecret: "0AGK_CD69MmgjUqwFmEdlRzF",
    callbackURL: "http://127.0.0.1/auth/google/callback",
    proxy: true
  },
  function(accessToken, refreshToken, profile, done) {
       User.findOrCreate({ userid: profile.id }, { name: profile.displayName,userid: profile.id }, function (err, user) {
         return done(err, user);
       });
  }
));

module.exports = passport;