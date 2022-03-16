const { Course } = require('../models');

const courseData = [

  {
    id: 1,
    category: 'Web Design',
  },
  {
    id: 2,
    category: 'GameDev',
},
    {
        id: 3,
        category: 'Cyber Security',
    }, 
    {
        id: 4,
        category:  'Cyber Security',
    },
    {
        id: 5,
        category: 'Web Design',
    },
    {
        id: 6,
        category: 'Web Design',
    },
    {
        id: 7,
        category: 'GameDev',
    },
    {
        id: 8,
        category: 'GameDev', 
    },
    {
        id: 9,
        category: 'Cyber Security',

    },

];

const seedCourse = () => Course.bulkCreate(courseData);
module.exports = seedCourse;

