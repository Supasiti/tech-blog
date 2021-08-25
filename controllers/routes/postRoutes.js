const router = require('express').Router();
const withAuth = require('../../utils/auth');
const postServices = require('../services/postServices');
const sanitize = require('../services/sanitize');

// route:  /posts/

router.get('/:id', withAuth, async (req, res) => {
  try {
    const postId = req.params.id;
    const rawPostData = await postServices.getOneById(postId);
    const postData = sanitize(rawPostData)[0];
    // const commentData = postData.comments;
    

    res.render('post', {
      loggedIn: req.session.logged_in,
      post: postData,
      // comments: commentData
    });

  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;