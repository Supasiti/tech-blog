const models = require('../../models')
const bcrypt = require('bcrypt')
const saltRounds = 10;

// create a user
// encrypt user's password
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

// authenticate user
// return 
//   User if the user and password is valid else null
const authenticate = async ( data ) => {
  const user = await models.User.findOne({ where : { email : data.email }});
  if ( !user ) return null;

  const result = await bcrypt.compare(data.password, user.password);
  return result? user : null;
}



module.exports = {
  authenticate,
  create,
  getAll
}