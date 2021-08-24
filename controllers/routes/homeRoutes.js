const router = require('express').Router();
// const { User } = require('../models');
// const withAuth = require('../utils/auth');
const post = require('../services/postServices')
const sanitize = require('../services/sanitize')

// route:  /

router.get('/', async (req, res) => {
  try {
    const rawPosts = await post.getAll();
    const posts = sanitize(rawPosts);
    res.render('homepage', {
      pageTitle: 'The Tech Blog',
      posts
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  // if (req.session.logged_in) {
  //   res.redirect('/');
  //   return;
  // }

  res.render('login');
});

module.exports = router;
