const models = require('../models');

const data = [
  {
    post_id: 2,
    user_id: 1,
    content: 'It  astounds me that people think this is the future of currency.'
  },
  {
    post_id: 3,
    user_id: 5,
    content: 'Meanwhile Google’s been doing it a hell of a lot longer and everybody is fine with that.'
  },
  {
    post_id: 4,
    user_id: 4,
    content: 'Use an ad blocker while browsing Gawker Media slideshows.'
  },
  {
    post_id: 4,
    user_id: 2,
    content: 'If you’re having difficulty remembering long password, use 1 word hint that need 4 words for you to describe.'
  }

];

const seedComments = () => models.Comment.bulkCreate(data)

module.exports = seedComments;