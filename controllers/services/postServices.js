const models = require('../../models');


// get all posts
// return - Array<Post>
const getAll = async () => {
  const result = await models.Post.findAll({
    include: [{
      model: models.User,
      attributes: { exclude: ['password'] }
    }],
    order : [
      ['createdAt', 'ASC']
    ]
  });
  return result;
}

// get all posts by userid
const getAllByUserId = async ( userId ) => {
  const result = await models.Post.findAll({
    where: { userId: userId },
    order : [
      ['createdAt', 'ASC']
    ]
  });
  return result;
}



module.exports = {
  getAll,
  getAllByUserId
}