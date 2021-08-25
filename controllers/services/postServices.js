const models = require('../../models');
const commentServices = require('./commentServices');


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

// get post by id
// return  
//  - Post including comments and user
const getOneById = async ( postId ) => {
  const postData = await models.Post.findAll({ 
    where: { id : postId },
    include: [
      { 
        model: models.Comment, 
        include: [{
          model: models.User,
          attributes: { exclude: ['password']}
        }]
      },
      {
        model: models.User,
        attributes: { exclude: ['password']}
      }
    ]
  })
  return postData;
}


// add comment to a post 
// return  
//  - Post including comments and user
const addComment = async ( commentData ) => {
  const { postId } = commentData; 
  const comment = await commentServices.create(commmentData);
  const result = await getOneById(postId);
  return result;
}

module.exports = {
  addComment,
  getAll,
  getAllByUserId,
  getOneById
}