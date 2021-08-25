const models = require('../../models');

// create a new comment 
// return 
//  - Comment
const create = async ( data ) => {
  const newComment = await models.Comment.create(data);
  return newComment
}

// get all comments
// return - Array<Comment>
const getAll = async () => {
  const comments = await models.Comment.findAll();
  return comments;
}

module.exports = {
  create,
  getAll
}