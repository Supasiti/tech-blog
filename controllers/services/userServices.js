const models = require('../../models')
const bcrypt = require('bcrypt')
const saltRounds = 10;

// create a user
// return - User
const create = async (user) => {
  const myPlaintextPassword = user.password;
  const encrpytedPassword = await bcrypt.hash(myPlaintextPassword, saltRounds)
  const preparedUser = { ...user, password : encrpytedPassword}
  const newUser = await models.User.create(preparedUser);
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