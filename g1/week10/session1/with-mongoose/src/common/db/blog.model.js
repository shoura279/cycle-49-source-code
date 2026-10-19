import { model, Schema } from "mongoose";

const schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 20
    },
    content: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 1000
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    }
  },
  {
    timestamps: true
  }
)

export const Blog = model('Blog', schema);
// collection >> blogs