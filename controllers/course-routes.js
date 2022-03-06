const router = require('express').Router();
const { Course } = require('../../models');
const sequelize = require('../../config/connection')


// get all courses
router.get('/', (req, res) => {
    Course.findAll({
      
      attributes: [
        'id', 
        'course_name', 
        'provider', 
        'description',
        'created_at',
        //[sequelize.literal('(SELECT COUNT (*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
      ],
      //this determines the sort/order in which posts will appear
      order: [['provider', 'DESC']],
    })
    .then(dbCourseData => res.json(dbCourseData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
  });


  module.exports = router;