const Course = require('./Course');
const Vote = require('./vote');
const User = require('./user');
const Comment = require('./Comment');
const Images = require('./Images');


Vote.belongsTo(User, {
    foreignKey: 'user_id'
});

Vote.belongsTo(Course, {
    foreignKey: 'course_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Course, {
    foreignKey: 'course_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

User.hasMany(Vote, {
    foreignKey: 'user_id'
});

Course.hasMany(Comment, {
    foreignKey: 'user_id'
});

Course.hasMany(User, {
    foreignKey: 'user_id'
});


Course.hasMany(Images, {
    foreignKey: 'course_id',
})

Images.belongsTo(Course, {
    foreignKey: 'course_id',
})

module.exports = { Course , Vote, User, Comment , Images};
