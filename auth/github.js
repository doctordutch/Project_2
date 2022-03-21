var passport = require('passport')
  , GitHubStrategy = require('passport-github2').Strategy;
var User = require('../models/user');

passport.use(new GitHubStrategy({
    clientID: "****",
    clientSecret: "****",
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
