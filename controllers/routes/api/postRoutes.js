const router = require('express').Router();
const postServices = require('../../services/postServices')
const sanitize = require('../../services/sanitize')


// route : api/posts/

// update
router.post('/:id', async (req, res) => {
  try {
    const postData = {...req.body, postId: req.params.id}
    const postsUpdated = await postServices.update(postData);
    res.status(200).json({ message : 'The post has been updated'})
  } catch (err) {
    res.status(400).json(err)
  }
})

// delete
router.delete('/:id', async (req, res) => {
  try {
    const postId = req.params.id;
    const postsRemoved = await postServices.remove(postId);
    res.status(200).json({ message : 'The post has been deleted'})
  } catch (err) {
    res.status(400).json(err)
  }
})

// get all
router.get('/', async (req, res) => {
  try {
    const rawPostData = await postServices.getAll();
    const postData = sanitize(rawPostData);
    res.status(200).json(postData)
  } catch (err) {
    res.status(400).json(err)
  }
})

// create a new post
router.post('/', async (req, res) => {
  try {
    const userId = req.session.user.id;
    const newPostData = { ...req.body, userId };
    if (!newPostData.userId) {
      res.status(400).json({ message: 'Require userId to create a new post' })
      return
    }
    const rawPostData = await postServices.create(newPostData);
    const postData = sanitize(rawPostData);
    res.status(200).json(postData)
  } catch (err) {
    res.status(400).json(err)
  }
})

module.exports = router;

