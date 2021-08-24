const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// user - post
User.hasMany(Post)
Post.belongsTo(User)

// post - comment
Post.hasMany(Comment)
Comment.belongsTo(Post)

// comment - user
User.hasMany(Comment)
Comment.belongsTo(User)

module.exports = {
  User,
  Post,
  Comment
}