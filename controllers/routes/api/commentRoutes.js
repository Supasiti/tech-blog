const router = require('express').Router();
const commentServices = require('../../services/commentServices')
const sanitize = require('../../services/sanitize')


// route : api/comments/

router.post('/', async (req, res) => {
  try {
    const userId = req.session.user.id;
    const commentData = {...req.body, userId }
    const rawComment = await commentServices.create(commentData);
    const comment = sanitize(rawComment);
    res.status(200).json(comment)
  } catch (err) {
    res.status(400).json(err);
  }
});


// get all comments
router.get('/', async (req, res) => {
  try {
    const rawComments = await commentServices.getAll();
    const comments = sanitize(rawComments);
    res.status(200).json(comments)
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;