import { model, Schema } from "mongoose";

const schema = new Schema(
  {
    userName: {
      type: String, minlength: 2, maxlength: 20, trim: true, required: true
    },// "   ka3 bora  " >> "ka3 bora"
    email: {
      type: String,
      required: function () {
        return this.phone ? false : true
      }
    },
    phone: { type: String, length: 11 },
    password: {
      type: String,
      required: function () {
        return this.provider === 'local';
      },
      minlength: 8
    },
    provider: {
      type: String,
      enum: ['local', 'google', 'facebook'],
      default: 'local'
    }
  },
  {
    timestamps: true,
    strict: false,
  }
);
export const User = model('User', schema);
