const { User } = require('../models');

const userData = [

  {
    id: 1,
    username: 'alex',
    email: 'alex@yahoo.com',
    password: '123456',

    
  },
  {
    id: 2,
    username: 'lauren',
    email: 'lauren@yahoo.com',
    password: '123456',

    
},
    {
        id: 3,
        username: 'maria', 
        email: 'maria@yahoo.com',
        password: '123456',

        
    }, 
    {
        id: 4,
        username: 'ruby',
        email: 'ruby@yahoo.com',
        password: '123456',


        
    },
    {
        id: 5,
        username: 'rose',
        email: 'rose@yahoo.com',
        password: '123456',


        
    },
    {
        id: 6,
        username: 'raul',
        email: 'raul@yahoo.com',
        password: '123456',


        
    },
    {
        id: 7,
        username: 'randy',
        email: 'randy@yahoo.com',
        password: '123456',


        
    },
    {
        id: 8,
        username: 'siri', 
        email: 'siri@yahoo.com',
        password: '123456',


       
    },
    {
        id: 9,
        username: 'max', 
        email: 'max@yahoo.com',
        password: '123456',


       

    },

];

const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;

