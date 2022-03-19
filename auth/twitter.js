var passport = require('passport')
  , TwitterStrategy = require('passport-twitter').Strategy;
var User = require('../models/User');

passport.serializeUser(function (user, fn) {
  fn(null, user);
});

passport.deserializeUser(function (id, fn) {
  User.findOne({_id: id.doc._id}, function (err, user) {
    fn(err, user);
  });
});

passport.use(new TwitterStrategy({
    consumerKey: "3AnMm3hGPMMuOAfkThzCF06SL",
    consumerSecret: "Nle9HQwNDcL6F48e0OkGgxkvGAMDF4lSxjn7tRTm00korZDKoB",
    callbackURL: "http://localhost:3001/auth/twitter/callback",
    proxy: true
  },
  
function(accessToken, refreshToken, profile, done) {
  User.findOne({userid: profile.id}).then((currentUser) => {
    if(currentUser){
      done(null, currentUser);
    } else {
      new User({
        userid: profile.id,
        name: profile.displayName
      }).save().then((newUser) => {
        console.log('created new user: ', newUser);
        done(null, newUser);
      });
    }
  });
}));

module.exports = passport;