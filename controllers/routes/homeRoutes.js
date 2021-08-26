const router = require('express').Router();
const withAuth = require('../../utils/auth');
const postServices = require('../services/postServices');
const sanitize = require('../services/sanitize');
const postRoutes = require('./postRoutes');

// route:  /

router.use('/posts', postRoutes);

// homepage
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

// login page
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login', {
    pageTitle: 'The Tech Blog',
    loggedIn: req.session.logged_in,
  });
});

// signup page
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('signup', {
    pageTitle: 'The Tech Blog',
    loggedIn: req.session.logged_in,
  });
});


// dashboard page
router.get('/dashboard', withAuth, async (req, res) => {
  const userData = req.session.user;
  const rawPostsData = await postServices.getAllByUserId(userData.id)
  const postsData = sanitize(rawPostsData);

  res.render('dashboard', {
    pageTitle: 'Dashboard',
    loggedIn: req.session.logged_in,
    user: req.session.user,
    posts: postsData
  });
});

module.exports = router;
