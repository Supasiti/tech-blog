const router = require('express').Router();
// const { User } = require('../models');
// const withAuth = require('../utils/auth');
const postServices = require('../services/postServices')
const sanitize = require('../services/sanitize')

// route:  /

router.get('/', async (req, res) => {
  try {
    const rawPosts = await postServices.getAll();
    const posts = sanitize(rawPosts);
    res.render('homepage', {
      pageTitle: 'The Tech Blog',
      loggedIn: req.session.logged_in,
      posts
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login', {
    loggedIn: req.session.logged_in,
  });
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('signup', {
    loggedIn: req.session.logged_in,
  });
});

module.exports = router;
