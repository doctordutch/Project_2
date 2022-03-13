const { Course } = require('../models');

const courseData = [

  {
    id: 1,
    course_name: 'Coding Bootcamp',
    school: 'Michigan State University',
    category: 'Web Design',
    synopsis: 'Async classes for front and back end code certification',
    file_image: 'coding.jpg'
  },
  {
    id: 2,
    course_name: 'Game Art & Development',
    school: 'SNHU',
    category: 'GameDev',
    synopsis: 'Online classes in 3D ARt and Design, Creative Design and Character Animation',
    file_image: 'gaming.jpg'    
},
    {
        id: 3,
        course_name:   'Data Mining & Analytics', 
        school: 'Devry University', 
        category: 'Cyber Security',
        synopsis: 'Virtual classes in predictive data models, cloud computing and security',
        file_image: 'cyberSecurity.jpg'
    }, 
    {
        id: 4,
        course_name: 'Cyber Security', 
        school: 'SNHU',
        category:  'Cyber Security',
        synopsis: 'Foundations, networking, operating system security and cyber defense',
        file_image: 'cyberSecurity.jpg'
    },
    {
        id: 5,
        course_name:  'Information Technology Essentials',
        school: 'DeVry University',
        category: 'Web Design',
        synopsis: 'Programming, devices and operating system basics',
        file_image: 'coding.jpg'
    },
    {
        id: 6,
        course_name: 'Computer Programming',
        school: 'SNHU',
        category: 'Web Design',
        synopsis: 'Foudational programming & software development',
        file_image: 'coding.jpg'
    },
    {
        id: 7,
        course_name: 'Game Design & Development', 
        school: 'Michigan State University',
        category: 'GameDev',
        synopsis: 'Online class, minor degree, game theory and design',
        file_image: 'gaming.jpg'
    },
    {
        id: 8,
        course_name: 'Gaming and Interactive Media',
        school: 'DeVry University', 
        category: 'GameDev', 
        synopsis: 'BS Specialization course for technology majors',
        file_image: 'gaming.jpg'
    },
    {
        id: 9,
        course_name: 'CyberSecurity',
        school: 'Michigan State University', 
        category: 'Cyber Security',
        synopsis: '24 week bootcamp at College of Engineering',
        file_image: 'cyberSecurity.jpg'

    },

];

const seedCourse = () => Course.bulkCreate(courseData);
module.exports = seedCourse;

