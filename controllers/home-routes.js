const router = require('express').Router();
const sequelize = require('../config/connection');
const { Comment, Courses, User, Vote } = require('../models');

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;