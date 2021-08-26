const seedUsers = require('./seedUsers');
const seedPosts = require('./seedPosts');
const seedComments = require('./seedComments');

const sequelize = require('../configs/connection');

const seedAll = async () => {
  console.log('BEGIN SEEDING....')

  await sequelize.sync({ force: true });
  console.log('\n----- Database Synced -----\n');

  await seedUsers();
  console.log('\n----- Users Seeded -----\n');

  await seedPosts();
  console.log('\n----- Posts Seeded -----\n');

  await seedComments();
  console.log('\n----- Comments Seeded -----\n');
  
  process.exit(0);
};

seedAll();
