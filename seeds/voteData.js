const { Vote } = require('../models');

const voteData = [

  {
    id: 1,
    user_id: 1,
    course_id: 1,
    
  },
  {
    id: 2,
    user_id: 2,
    course_id: 2,
    
},
    {
    id: 3,
    user_id: 3,
    course_id: 3,
    
        
    }, 
    {
        id: 4,
        user_id: 4,
        course_id: 4,
    
        
    },
    {
        id: 5,
        user_id: 5,
        course_id: 5,
    
        
    },
    {
        id: 6,
        user_id: 6,
        course_id: 6,
    
        
    },
    {
        id: 7,
        user_id: 7,
        course_id: 7,
    
        
    },
    {
        id: 8,
        user_id: 8,
        course_id: 8,
    
       
    },
    {
        id: 9,
        user_id: 9,
        course_id: 9 , 
       

    },

];

const seedVote = () => Vote.bulkCreate(voteData);
module.exports = seedVote;

