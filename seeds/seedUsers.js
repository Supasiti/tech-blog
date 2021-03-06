const models = require('../models');

const data = [
  {
    "username": "Sal",
    "email": "sal@hotmail.com",
    "password": "$2b$10$wxKAh5pQNR1EoCRPdjfTeeCYIG7Wei6.hXweYCZ2WkVScLpufkuWy"
  },
  {
    "username": "Lernantino",
    "email": "lernantino@gmail.com",
    "password": "$2b$10$wxKAh5pQNR1EoCRPdjfTeeCYIG7Wei6.hXweYCZ2WkVScLpufkuWy"
  },
  {
    "username": "Amiko",
    "email": "amiko2k20@aol.com",
    "password": "$2b$10$wxKAh5pQNR1EoCRPdjfTeeCYIG7Wei6.hXweYCZ2WkVScLpufkuWy"
  },
  {
    "username": "Jordan",
    "email": "jordan99@msn.com",
    "password": "$2b$10$wxKAh5pQNR1EoCRPdjfTeeCYIG7Wei6.hXweYCZ2WkVScLpufkuWy"
  },
  {
    "username": "Blake",
    "email": "the_blake@yahoo.com",
    "password": "$2b$10$wxKAh5pQNR1EoCRPdjfTeeCYIG7Wei6.hXweYCZ2WkVScLpufkuWy"
  }
];

const seedUsers = () => models.User.bulkCreate(data)

module.exports = seedUsers;