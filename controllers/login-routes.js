const router = require('express').Router();
////const req = require('express/lib/request');
const res = require('express/lib/response');

const routeLogin = (req, res, next) => {
    res.render('login')
  };
  
module.exports = routeLogin;