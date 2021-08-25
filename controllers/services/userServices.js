const models = require('../../models')


// create a user
// return - User
const create = async (user) => {
  const newUser = await models.User.create(user);
  return newUser
}


// get all users
// return - Array<User>
const getAll = async () => {
  const newUsers = await models.User.findAll();
  return newUsers
}

module.exports = {
  create,
  getAll
}