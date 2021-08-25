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

    res.render('post', {
      pageTitle: 'The Tech Blog',
      loggedIn: req.session.logged_in,
      post: postData,
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

// edit
router.get('/:id/edit', withAuth, async (req, res) => {
  try {
    const postId = req.params.id;
    const currentUserId = req.session.user.id;
    const rawPostData = await postServices.getOneById(postId);
    
    // redirect if the post doesn't belong to them
    if (rawPostData[0].userId !== currentUserId) {
      res.redirect('/')
      return
    }

    const postData = sanitize(rawPostData[0]);

    res.render('postEdit', {
      pageTitle: 'Dashboard',
      loggedIn: req.session.logged_in,
      post: postData,
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;