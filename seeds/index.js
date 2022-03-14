const sequelize = require('../config/connection');
const seedCourse = require('./courseData');
const seedComment = require('./commentData');
const seedUser = require('./userData');
const seedVote = require('./voteData');

const seedAll = async () => {
    await sequelize.sync({forced: true });
    await seedUser();

    await seedCourse();

    await seedComment();

    await seedVote();

  

    process.exit(0);
};

seedAll();