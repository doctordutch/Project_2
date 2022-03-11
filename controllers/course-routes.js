const router = require('express').Router();
const { Course } = require('../models');
const sequelize = require('../config/connection');
////const req = require('express/lib/request');
const res = require('express/lib/response');


// get all courses
router.get('/', (req, res) => {
    Course.findAll({
      
      attributes: [
        'id', 
        'course_name', 
        'school', 
        'category',
        'synopsis'
        //'created_at',
        //[sequelize.literal('(SELECT COUNT (*) FROM vote WHERE course.id = vote.course_id)'), 'vote_count']
      ],
      //this determines the sort/order in which posts will appear
      order: [['school', 'DESC']],
    })
    .then(dbCourseData => res.json(dbCourseData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
  });

  router.get('/:id', (req, res) => {
    Course.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id', 
        'course_name', 
        'school', 
        'category',   
        'synopsis'
        //'created_at'
      ],
    })
    .then(dbCourseData => {
      if (!dbCourseData) {
        res.status(404).json({ message: 'Oh no!  There is no course with that id!'});
        return;
      }
      res.json(dbCourseData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

  //this will allow a user to add a course
  router.post('/', (req, res) => {
    Course.create({
      course_name: req.body.course_name,
      school: req.body.school,
      category: req.body.category,
      synopsis: req.body.synopsis
    })
    .then(dbCourseData => res.json(dbCourseData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

  module.exports = router;