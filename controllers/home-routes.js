const router = require('express').Router();
const sequelize = require('../config/connection');
const { Comment, Courses, User, Vote } = require('../models');

router.get('/', (req, res) => {
    res.render('home');
});


module.exports = router;