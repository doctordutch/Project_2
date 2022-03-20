const router = require('express').Router();
const res = require('express/lib/response');
const sequelize = require('../config/connection');
const { Comment, Course, User, Vote , Images} = require('../models');


router.get('/', (req, res) => {
    console.log(req.session);
    Course.findAll({        
            include: [
                {
                    model: Images,
                    attributes: ['id', 'school',  'course_name', 'synopsis', 'file_image'],
                    include: {
                    model: Course,
                    attributes: ['id']
                  }
                },
            ]
            
        })
        .then(dbCourseData => {
        const course = dbCourseData.map((course => course.get({ plain: true})));
        
        res.render('homepage', { course
        })
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    })

router.get('/courses/:id', (req, res) => {
    Course.findByPk(req.params.id, {
        attributes: [
                    'id', 
                    'category',   
                    //'created_at'
                      [sequelize.literal('(SELECT COUNT (*) FROM vote WHERE course.id = vote.course_id)'), 'vote_count']
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
                        model: Images,
                        attributes: ['id', 'school', 'course_name', 'synopsis', 'file_image'],
                        include: {
                        model: Course,
                        attributes: ['id']
                      }
                    },
                    
                    {
                        model: User,
                        attributes: ['username']
                        }
                    
                ],
            
            })
            .then(dbCourseData => {
            const course = dbCourseData.get({ plain: true});
            res.render('courses', {  course
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    })

})


router.get('/images/:id', async (req, res) => {
try {
    const dbImagesData = await Images.findByPk(req.params.id);
     const images = dbImagesData.get({ plain: true });
        console.log(dbImagesData);
     res.render('images', {images});
}catch(err) {
            console.log(err);
            res.status(500).json(err);

        }
    });

// router.get('/login', (req, res) => {
//        if (req.session.loggedIn) {
//          res.redirect('/');
//          return;
//        }
//      
//        res.render('login');
//      });

module.exports = router;
