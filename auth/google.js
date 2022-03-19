var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../models/User');

passport.use(new GoogleStrategy({
    clientID: "676337670719-ci9b2gibgcur979e4lu2882ipkbsj0at.apps.googleusercontent.com",
    clientSecret: "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",
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