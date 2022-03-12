const sequelize = require('../config/connection');
const seedCourse = require('./courseData');

const seedAll = async () => {
    await sequelize.sync({forced: true });

    await seedCourse();

    process.exit(0);
};

seedAll();