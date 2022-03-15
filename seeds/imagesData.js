const { Images} = require('../models');

const imagesData = [

  {
    id: 1,
    school: 'Michigan State University',
    course_name: 'Coding Bootcamp',
    synopsis: 'Async classes for front and back end code certification',
    file_image: 'coding.jpg',
    course_id: 1,
    
  },
  {
    id: 2,
    school: 'SNHU',
    course_name: 'Game Art & Development',
    synopsis: 'Online classes in 3D ARt and Design, Creative Design and Character Animation',
    file_image: 'gaming.jpg',
    course_id: 2,
    
},  
{
        id: 3,
        school: 'Devry University', 
        course_name:   'Data Mining & Analytics', 
        synopsis: 'Virtual classes in predictive data models, cloud computing and security',
        file_image: 'cyberSecurity.jpg',
        course_id: 3,
    

    },
    {
        id: 4,
        school: 'SNHU',
        course_name: 'Cyber Security', 
        synopsis: 'Foundations, networking, operating system security and cyber defense',
        file_image: 'cyberSecurity.jpg',
        course_id: 4,


    },
    {
        id: 5,
        school: 'DeVry University',
        course_name:  'Information Technology Essentials',
        synopsis: 'Programming, devices and operating system basics',
        file_image: 'coding.jpg',
        course_id: 5,
    },
    {
        id: 6,
        school: 'SNHU',
        course_name: 'Computer Programming',
        synopsis: 'Foudational programming & software development',
        file_image: 'coding.jpg',
        course_id: 6,
    },
    {
        id: 7,
        school: 'Michigan State University',
        course_name: 'Game Design & Development', 
        synopsis: 'Online class, minor degree, game theory and design',
        file_image: 'gaming.jpg',
        course_id: 7,
    },
    {
        id: 8,
        school: 'DeVry University', 
        course_name: 'Gaming and Interactive Media',
        synopsis: 'BS Specialization course for technology majors',
        file_image: 'gaming.jpg',
        course_id: 8,
    },
    {
        id: 9,
        school: 'Michigan State University', 
        course_name: 'CyberSecurity',
        synopsis: '24 week bootcamp at College of Engineering',
        file_image: 'cyberSecurity.jpg',
        course_id: 9,
    }
    

];

const seedImages = () => Images.bulkCreate(imagesData);
module.exports = seedImages;
