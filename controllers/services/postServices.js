const models = require('../../models');


// get all post 
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

module.exports = {
  getAll
}