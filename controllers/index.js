const router = require('express').Router();

const courseRoutes = require('./course-routes');
const homeRoutes = require('./home-routes')
const commentRoutes = require('./comment-routes');

router.use('/courses', courseRoutes);
router.use('/', homeRoutes);
router.use('/comment', commentRoutes);

router.use((req, res) => {
    res.status(404).end()
});

module.exports = router;