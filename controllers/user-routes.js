const router = require('express').Router();
const res = require('express/lib/response');
const {User, Course, Comment, Vote} = require('../models');

router.get('/', (req, res) => {
    User.findAll()
})
.then(dbUserData => res.json(dbUserData))
.catch(err => {
    console.log(err);
    res.status(500).json(err);
});

router.get('/:id', (req, res) => {
    User.findOne({
        where: {
        id: req.params.id
    },
    include: [
        {
            model: Course,
            attributes: ['id', 'course_name']
        },

        {
            model: Comment,
            attributes: ['id', 'comments'],
            include: {
                model: Course,
                attributes: ['course_id']
            }
        },
        {
            model: Course,
            attributes: ['id'],
            through: Vote,
            as: 'votes_posted'
        }
    ]
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({message: 'NO user found'});
            return;
        } res.json(dbUserData);
    }) .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})
})

router.post('/', (req, res) => {
    User.create({
        user_id: req.body.user_id

}) .then(dbUserData => {
    res.json(dbUserData);
})
.catch(err => {
    console.log(err);
    res.status(500).json(err);
})
})

module.exports = router;