const { Course } = require('../models');

const courseData = [
    {
        course_name:  'Coding Bootcamp',
        school: 'Michigan State University', 
        category: 'Web Design', 
        synopsis: 'Async classes for front and back end code certification',
    },
    {
        course_name:  'Game Art & Development',
        school: 'SNHU', 
        category: 'GameDev',
        synopsis: 'Online classes in 3D ARt and Design, Creative Design and Character Animation',
    },
    {
        course_name:   'Data Mining & Analytics', 
        school: 'Devry University', 
        category: 'Cyber Security',
        synopsis: 'Virtual classes in predictive data models, cloud computing and security',

    }, 
    {
        course_name: 'Cyber Security', 
        school: 'SNHU',
        category:  'Cyber Security',
        synopsis: 'Foundations, networking, operating system security and cyber defense',

    },
    {
        course_name:  'Information Technology Essentials',
        school: 'DeVry University',
        category: 'Web Design',
        synopsis: 'Programming, devices and operating system basics',
    },
    {
        course_name: 'Computer Programming',
        school: 'SNHU',
        category: 'Web Design',
        synopsis: 'Foudational programming & software development',

    },
    {
        course_name: 'Game Design & Development', 
        school: 'Michigan State University',
        category: 'GameDev',
        synopsis: 'Online class, minor degree, game theory and design',
    },
    {
        course_name: 'Gaming and Interactive Media',
        school: 'DeVry University', 
        category: 'GameDev', 
        synopsis: 'BS Specialization course for technology majors',
    },
    {
        course_name: 'CyberSecurity',
        school: 'Michigan State University', 
        category: 'Cyber Security',
        synopsis: '24 week bootcamp at College of Engineering',

    },

];

const seedCourse = () => Course.bulkCreate(courseData);
module.exports = seedCourse;

