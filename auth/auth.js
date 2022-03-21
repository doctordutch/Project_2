var express = require('express');
var router = express.Router();
var passport = require('passport');

var passportTwitter = require('../auth/twitter');
var passportGitHub = require('../auth/github');
var passportLocal = require('../auth/local');

/* LOGIN ROUTER */
router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Please Sign In' });
  });

/* LOGOUT ROUTER */
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

/* TWITTER ROUTER */
router.get('/twitter',
  passportTwitter.authenticate('twitter'));

router.get('/twitter/callback',
  passportTwitter.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.json(req.user);
    res.redirect('/');
  });

/* GITHUB ROUTER */
router.get('/github',
  passportGitHub.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/github/callback',
  passportGitHub.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.json(req.user);
    res.redirect('/');
  });

module.exports = router;