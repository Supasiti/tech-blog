const models = require('../models');

const data = [
  {
    user_id: 1,
    title: 'A Misused Microsoft Tool Leaked Troves of Data From 47 Organizations',
    content: 'Misuse of a widely used tool has led to a gargantuan amount of private data being exposed online.'
  },
  {
    user_id: 1,
    title: 'All $610 Million Stolen in Historic Crypto Heist Has Been Returned, Poly Network Says',
    content: 'In just a few weeks, Poly went from threatening legal action to offering the thief an advisory role at the company.'
  },
  {
    user_id: 2,
    title: 'Apple Has Reportedly Been Scanning Your iCloud Mail for Child Abuse Images Since 2019',
    content: 'The tech giant has been scouring iCloud mail for signs of child abuse material for years, according to a new report.'
  },
  {
    user_id: 3,
    title: 'A Complete Guide to Not Getting Hacked',
    content: `It's never seemed less safe to surf the web. Here are some things to think about to keep from getting hacked...`
  }
];

const seedPosts = () => models.Post.bulkCreate(data)

module.exports = seedPosts;