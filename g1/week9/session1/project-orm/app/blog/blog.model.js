const { DataTypes } = require("sequelize");
const { sequelize } = require("../common/db/connection");
const { User } = require("../common/db/user.model");

const Blog = sequelize.define('Blog', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,

  },
  // user_id
  // UserId

},
  {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
);

// user has many Blogs
// blogs belongs to on User

Blog.belongsTo(User, {
  foreignKey: {
    name: "user_id",
    allowNull: false
  }
});

User.hasMany(Blog, {
  foreignKey: {
    name: "user_id",
    allowNull: false
  }
});

module.exports = { Blog }