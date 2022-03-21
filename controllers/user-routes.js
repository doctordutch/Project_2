const router = require('express').Router();
//const res = require('express/lib/response');
const {User, Course, Comment, Vote, Images} = require('../models');

var passportTwitter = require('../auth/twitter');
var passportGitHub = require('../auth/github');

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/auth/login')
  }

// you can add the above function to any router.get call 
// to redirect somewhere else if not logged in 
//
// (for example: 
//      router.get('/', ensureAuthenticated, function(req, res, next) {
//      res.render('user', { user: req.user });
//      });
//


/* GET users listing. */
router.get('/', (req, res) => {
  User.findAll({
      attributes: ['id', 'username', 'email', 'password'],
})
.then(dbUserData => res.json(dbUserData))
.catch(err => {
  console.log(err);
  res.status(500).json(err);
});
});

router.get('/:id', (req, res) => {
    User.findOne({
        where: {
        id: req.params.id
    },
    include: [
        {
            model: Course,
            attributes: ['id', 'category']
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
            model: Images,
            attributes: ['id', 'school', 'course_name', 'synopsis', 'file_image', 'course_id'],
            include: {
                model: Course,
                attributes: ['id']
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
});

router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
}) .then(dbUserData => {
    res.json(dbUserData);
    // req.session.user_id = dbUserData.id;
    // req.session.username = dbUserData.username;
    // req.session.loggedIn = true;
})
.catch(err => {
    console.log(err);
    res.status(500).json(err);
});
});


module.exports = router;