const router = require('express').Router();
//const res = require('express/lib/response');
const {User, Course, Comment, Vote, Images} = require('../models');

var passportFacebook = require('../auth/facebook');
var passportTwitter = require('../auth/twitter');
var passportGoogle = require('../auth/google');
var passportGitHub = require('../auth/github');

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

router.post('/login', (req, res) => {
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(dbUserData => {
      if (!dbUserData) {
        res.status(400).json({ message: 'No user with that email address!' });
        return;
      }
  
      const validPassword = dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }
  
      req.session.save(() => {
        // declare session variables
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
  
        res.json({ user: dbUserData, message: 'You are now logged in!' });
      });
    });
  });

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
          res.status(204).end();
        });
      }
      else {
        res.status(404).end();
      }
});

module.exports = router;