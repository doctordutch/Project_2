const router = require('express').Router();
const { Comment } = require('../models');


router.get('/', (req, res) => {
    Comment.findAll({  
        attributes: ['id', 'comments', 'user_id', 'course_id'],
})
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Comment.create({
        comments: req.body.comments,
        user_id: req.body.user_id,
        course_id: req.body.course_id

    }).then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});



router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbCommentData => {
        if(!dbCommentData) {
            res.status(404).json({ message: ' No comment was found'});
            return;
        }
        res.json(dbCommentData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;