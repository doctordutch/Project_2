const router = require('express').Router();

const courseRoutes = require('./course-routes');
const homeRoutes = require('./home-routes')
const commentRoutes = require('./comment-routes');
const userRoutes = require('./user-routes');


router.use('/courses', courseRoutes);
router.use('/', homeRoutes);
router.use('/comment', commentRoutes);
router.use('/users', userRoutes);

router.use((req, res) => {
    res.status(404).end()
});

module.exports = router;