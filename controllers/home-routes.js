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
                'file_image',
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
        res.render('homepage', { course });

    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/courses/:id', (req, res) => {
    Course.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id', 
        'course_name', 
        'school', 
        'category',   
        'synopsis',
        'file_image',
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
            model: User,
            attributes: ['username']
            }
    ]
})
    .then(dbCourseData => {
      if (!dbCourseData) {
        res.status(404).json({ message: 'Oh no!  There is no course with that id!'});
        return;
      }
      const course = dbCourseData.get({plain: true});
      res.render('course', {course});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})


router.get('/about', (req, res) => {
    res.render('about');
});


router.get('/', (req, res) => {
    Course.findAll({
        where: {
            user_id: req.body.user_id
        },
            attributes: [
                'id', 
                'course_name', 
                'school', 
                'category',   
                'synopsis',
                'file_image',
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
                    model: User,
                    attributes: ['username']
                    }
            ]
        })
        .then(dbCourseData => {
            const course = dbCourseData.map(course => course.get({ plain: true}));
            res.render('homepage', { course});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    });

    router.get('/edit/:id', (req, res) => {
        Course.findByPk(req.params.id, {
            attributes: [
                'id', 
                'course_name', 
                'school', 
                'category',   
                'synopsis',
                'file_image',
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
                    model: User,
                    attributes: ['username']
                    }
            ]
        }) .then(dbCourseData => {
            if(dbCourseData) {
                const course = dbCourseData.get({ plain: true });

                res.render('edit-post', {
                    course
                });
            } else {
                res.status(404).end();
            }
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    });



    router.get('/', (req, res) => {
        const dbCourseData = Course.findAll({
        })
        const course = dbCourseData.map((course) =>
        course.get({ plain: true})
        );
        res.render('homepage', {
            course
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    })

    router.get('/courses/:id', (req, res) => {
        const dbCourseData = 
            Course.findByPk(req.params.id, {
                attributes: [
                    'id', 
                    'course_name', 
                    'school', 
                    'category',   
                    'synopsis',
                    'file_image',
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
                        model: User,
                        attributes: ['username']
                        }
                    
                ],
            
            });
            const course = dbCourseData.get({ plain: true});
            res.render('course', {  course
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    })

    

    router.get('/courses/:id', (req, res) => {
        const dbCourseData = Course.findByPk(req.params.id);

        const course = dbCourseData.get({ plain: true });

        res.render('course', {course
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

module.exports = router;