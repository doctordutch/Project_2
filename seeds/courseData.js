const { Course } = require('../models');

const courseData = [
    {
        id: 1,
        course_name:  'Coding Bootcamp',
        school: 'Michigan State University', 
        category: 'Web Design', 
        synopsis: 'Async classes for front and back end code certification',
        user_id: 1,
    },
    {
        id: 2,
        course_name:  'Game Art & Development',
        school: 'SNHU', 
        category: 'GameDev',
        synopsis: 'Online classes in 3D ARt and Design, Creative Design and Character Animation',
        user_id: 2,
    },
    {
        id: 3,
        course_name:   'Data Mining & Analytics', 
        school: 'Devry University', 
        category: 'Cyber Security',
        synopsis: 'Virtual classes in predictive data models, cloud computing and security',
        user_id: 3,

    }, 
    {
        id: 4,
        course_name: 'Cyber Security', 
        school: 'SNHU',
        category:  'Cyber Security',
        synopsis: 'Foundations, networking, operating system security and cyber defense',
        user_id: 4,
    },
    {
        id: 5,
        course_name:  'Information Technology Essentials',
        school: 'DeVry University',
        category: 'Web Design',
        synopsis: 'Programming, devices and operating system basics',
        user_id: 5,
    },
    {
        id: 6,
        course_name: 'Computer Programming',
        school: 'SNHU',
        category: 'Web Design',
        synopsis: 'Foudational programming & software development',
        user_id: 6,

    },
    {
        id: 7,
        course_name: 'Game Design & Development', 
        school: 'Michigan State University',
        category: 'GameDev',
        synopsis: 'Online class, minor degree, game theory and design',
        user_id: 7,
    },
    {
        id: 8,
        course_name: 'Gaming and Interactive Media',
        school: 'DeVry University', 
        category: 'GameDev', 
        synopsis: 'BS Specialization course for technology majors',
        user_id: 8,
    },
    {
        id: 9,
        course_name: 'CyberSecurity',
        school: 'Michigan State University', 
        category: 'Cyber Security',
        synopsis: '24 week bootcamp at College of Engineering',
        user_id: 9

    },

];

const seedCourse = () => Course.bulkCreate(courseData);
module.exports = seedCourse;

