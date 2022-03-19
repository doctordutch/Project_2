var passport = require('passport')
  , GitHubStrategy = require('passport-github').Strategy;
var User = require('../models/User');

passport.use(new GitHubStrategy({
    clientID: "95f3d3a98a993d640f8a",
    clientSecret: "29300509f6ffd01abb7d525babeb692a602c872b",
    callbackURL: "http://localhost:3001/auth/github/callback",
    proxy: true
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

module.exports = passport;