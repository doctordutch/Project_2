var passport = require('passport')
  , GitHubStrategy = require('passport-github2').Strategy;
var User = require('../models/User');

passport.use(new GitHubStrategy({
    clientID: "95f3d3a98a993d640f8a",
    clientSecret: "29300509f6ffd01abb7d525babeb692a602c872b",
    callbackURL: "http://localhost:3001/auth/github/callback",
    proxy: true
  },
  function(req, accessToken, refreshToken, profile, done){
	console.log(profile)
	var user = {
		email:        profile.email.value,
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
	done(null, user);
}	
));

module.exports = passport;
