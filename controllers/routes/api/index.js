const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const postRoutes = require('./postRoutes');
const seedAll = require('../../../seeds/seed');

router.get('/seeds', async( req, res) => {
  try {
    await seedAll();
    res.status(204).end();
  } catch (err) {
    res.status(500).json(err);
  }
})


router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);

module.exports = router;
