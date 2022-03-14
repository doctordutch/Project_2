const { Comment } = require('../models');

const commentData = [

  {
    id: 1,
    comments: 'I agree',
    user_id: 1,
    course_id: 1,
    
  },
  {
    id: 2,
    comments: 'I dont agree',
    user_id: 2,
    course_id: 2,
    
},
    {
        id: 3,
        comments:   'yes', 
        user_id: 3, 
        course_id: 3,
        
    }, 
    {
        id: 4,
        comments: 'No', 
        user_id: 4,
        course_id:  4,
        
    },
    {
        id: 5,
        comments:  "I'll apply",
        user_id: 5,
        course_id: 5,
        
    },
    {
        id: 6,
        comments: 'How much?',
        user_id: 6,
        course_id: 6,
        
    },
    {
        id: 7,
        comments: 'I am interested', 
        user_id: 7,
        course_id: 7,
        
    },
    {
        id: 8,
        comments: 'When does it start?',
        user_id: 8, 
        course_id: 8, 
       
    },
    {
        id: 9,
        comments: 'Now',
        user_id: 9, 
        course_id: 9,
       

    },

];

const seedComment = () => Comment.bulkCreate(commentData);
module.exports = seedComment;

