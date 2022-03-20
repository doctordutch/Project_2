const router = require('express').Router();

const courseRoutes = require('./course-routes');
const homeRoutes = require('./home-routes');
const commentRoutes = require('./comment-routes');
const userRoutes = require('./user-routes.js');
const aboutRoutes = require('./about-routes.js');
const auth = require('../auth/auth');

router.use('/courses', courseRoutes);
router.use('/', homeRoutes);
router.use('/comments', commentRoutes);
router.use('/users', userRoutes);
router.use('/about', aboutRoutes);
//router.use('/login', userRoutes);
router.use('/auth', auth);

router.use((req, res) => {
    res.status(404).end()
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

module.exports = router;