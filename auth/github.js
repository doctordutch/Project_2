var passport = require('passport')
  , GitHubStrategy = require('passport-github').Strategy;
var User = require('../models/User');

passport.use(new GitHubStrategy({
    clientID: "95f3d3a98a993d640f8a",
    clientSecret: "29300509f6ffd01abb7d525babeb692a602c872b",
    callbackURL: "http://localhost:3001/auth/github/callback",
    proxy: true
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

module.exports = passport;

module.exports = function( config ){
	//A. Tell http://console.developers.google.com who we are
	passport.use(new GithubStrategy(
		//B. Config found in /config/config.js.dist
		config,
	    function(req, accessToken, refreshToken, profile, done){
			//C. Let's create a single user and bind that to one DB account
			console.log(profile)
			var raw  = profile._raw
			var json = profile._json
			var user = {
				email:        profile.emails[0].value,
				image :       json.avatar_url,
				displayName : json.name,
				github: {
					id:    profile.id,
					token: accessToken,
					json:  json,
					raw:   raw
				}
			};
			console.log(user.github.json)
			//D. 
	        done(null, user);
	    }	
	))
}