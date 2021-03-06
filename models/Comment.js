const { Model, DataTypes } = require('sequelize');
const sequelize = require('../configs/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user', 
        key: 'id'
      }
    },
    post_id :{
      type: DataTypes.INTEGER,
      references: {
        model: 'post', 
        key: 'id'
      }
    },
    content: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;