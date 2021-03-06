const models = require('../../models');
const commentServices = require('./commentServices');

// create a post
// return - Post
const create = async (postData) => {
  const newPost = await models.Post.create(postData)
  return newPost;
} 

// get all posts
// return - Array<Post>
const getAll = async () => {
  const result = await models.Post.findAll({
    include: [{
      model: models.User,
      attributes: { exclude: ['password'] }
    }],
    order : [
      ['createdAt', 'DESC']
    ]
  });
  return result;
}

// get all posts by userid
const getAllByUserId = async ( userId ) => {
  const result = await models.Post.findAll({
    where: { userId: userId },
    order : [
      ['createdAt', 'DESC']
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
  return postData.length? postData[0] : null ;
}

// update a post
// return 
//  - int
const update = async (newPost) => {
  const { postId } = newPost;
  const postsUpdated = await models.Post.update(newPost, {
    where: {id : postId }
  }) 
  return postsUpdated;
}


// delete a post
// return - int
const remove = async (postId) => {
  const postsRemoved = await models.Post.destroy({
    where: { id: postId }
  })
  return postsRemoved;
} 

module.exports = {
  create,
  getAll,
  getAllByUserId,
  getOneById,
  remove,
  update,
}