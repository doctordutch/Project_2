const Course = require('./Course');
const Vote = require('./vote');
const User = require('./user');
const Comment = require('./Comment');
const Images = require('./Images');
//var fs = require("fs");
//var path = require("path");
//var Sequelize = require("sequelize");
//var config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
//var sequelize = new Sequelize(config.database, config.username, config.password, config)
//var db = {};

//fs
//    .readdirSync(__dirname)
//    .filter(function(file) {
//        return (file.indexOf(".") !== 0) && (file !== "index.js");
//    })
//    .forEach(function(file) {
//        var model = sequelize.import(path.join(__dirname, file));
//        db[model.name] = model;
//    });
// 
//Object.keys(db).forEach(function(modelName) {
//    if ("associate" in db[modelName]) {
//        db[modelName].associate(db);
//    }
//});
 
 
//db.sequelize = sequelize;
//db.Sequelize = Sequelize;


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
//module.exports = db;
