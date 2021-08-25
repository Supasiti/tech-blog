const router = require('express').Router();
const user = require('../../services/userServices')
const sanitize = require('../../services/sanitize')

router.post('/login', async (req, res) => {
  try {
    // const userData = await User.findOne({ where: { email: req.body.email } });

    // if (!userData) {
    //   res
    //     .status(400)
    //     .json({ message: 'Incorrect email or password, please try again' });
    //   return;
    // }

    // const validPassword = await userData.checkPassword(req.body.password);

    // if (!validPassword) {
    //   res
    //     .status(400)
    //     .json({ message: 'Incorrect email or password, please try again' });
    //   return;
    // }

    // req.session.save(() => {
    //   req.session.user_id = userData.id;
    //   req.session.logged_in = true;
      
    //   res.json({ user: userData, message: 'You are now logged in!' });
    // });

  } catch (err) {
    res.status(400).json(err);
  }
});

// sign up
router.post('/signup', async (req, res) => {
  try {
    const {username, email, password } = req.body;
    
    console.log(username);
    console.log(email);
    console.log(password);
    console.log(req.body);

    const rawUser = await user.create(req.body);
    console.log(rawUser)

    res.status(200).json({ message : `${req.body.username} has been created.` })
  } catch (err) {
    console.log(err)
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
    const rawUsers = await user.getAll();
    const users = sanitize(rawUsers);
    res.status(200).json(users)

  } catch (err) {
    res.status(500).json(err);
  }
})


module.exports = router;
