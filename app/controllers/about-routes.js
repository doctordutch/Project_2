const router = require('express').Router();
////const req = require('express/lib/request');
const res = require('express/lib/response');

const routeAbout = (req, res, next) => {
    res.render('about')
  }
  
module.exports = routeAbout