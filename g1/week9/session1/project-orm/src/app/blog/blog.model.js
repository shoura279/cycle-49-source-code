import { DataTypes } from "sequelize";
import { sequelize } from "../../common/db/connection.js";
import { User } from "../user/user.model.js";

export const Blog = sequelize.define('Blog', {
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
    name: "userId",
    field: 'user_id',
    allowNull: false
  }
});

User.hasMany(Blog, {
  foreignKey: {
    name: "userId",
    field: 'user_id',
    allowNull: false
  }
});

// module.exports = { Blog }