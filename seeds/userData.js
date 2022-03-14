const { User } = require('../models');

const userData = [

  {
    id: 1,
    username: 'alex',
    
  },
  {
    id: 2,
    username: 'lauren',
    
},
    {
        id: 3,
        username: 'maria', 
        
    }, 
    {
        id: 4,
        username: 'ruby',
        
    },
    {
        id: 5,
        username: 'rose',
        
    },
    {
        id: 6,
        username: 'raul',
        
    },
    {
        id: 7,
        username: 'randy',
        
    },
    {
        id: 8,
        username: 'siri', 
       
    },
    {
        id: 9,
        username: 'max', 
       

    },

];

const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;

