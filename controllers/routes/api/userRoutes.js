const router = require('express').Router();
const userServices = require('../../services/userServices')
const sanitize = require('../../services/sanitize')


// route : api/users/

// login
router.post('/login', async (req, res) => {
  try {
    const rawUser = await userServices.authenticate(req.body);
    if (!rawUser) {
      res.status(400).json({ message: 'Incorrect email or password, please try again'})
    }

    const userWithPassword = sanitize(rawUser);
    const { password, ...userWithoutPassword } = userWithPassword;

    // req.session.save(() => {
    //     req.session.user_id = userWithoutPassword.id;
    //     req.session.logged_in = true;
        
        
    //   });
    res.json({ user: userWithoutPassword, message: 'You are now logged in!' });
  } catch (err) {
    res.status(400).json(err);
  }
});

// sign up
router.post('/signup', async (req, res) => {
  try {
    const rawUser = await userServices.create(req.body);
    res.status(200).json({ message : `${req.body.username} has been created.` })
  } catch (err) {
    res.status(400).json(err);
  }
})

// log out
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// get all users
router.get('/', async (req, res) => {
  try {
    const rawUsers = await userServices.getAll();
    const users = sanitize(rawUsers);
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json(err);
  }
})


module.exports = router;
