const router = require('express').Router();
const sequelize = require('../config/connection');
const { Comment, Course, User, Vote } = require('../models');

router.get('/', (req, res) => {
    Course.findAll({
        attributes: [
                'id', 
                'course_name', 
                'school', 
                'category',
                'synopsis',
        [sequelize.literal('(SELECT COUNT (*) FROM vote WHERE course.id = vote.course_id)'), 'vote-count']
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comments', 'user_id', 'course_id'],
                include: {
                    model: User, 
                    attributes: ['username']
                }
            },
    
            {
                model: User,
                attributes: ['username']
                }
        ]
    })
    .then(dbCourseData => {
        const course = dbCourseData.map(course => course.get({plain: true }));
        res.render('home', { course });

    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;