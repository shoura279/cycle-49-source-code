import { model, Schema } from 'mongoose'

// structure 
const schema = new Schema(
  {
    userName: {
      type: String,
      minlength: 2,
      maxlength: 20,
      trim: true, // '    ka3bo   ra    ' >> 'ka3bo   ra'
      required: true
    },
    email: {
      type: String,
      required: function () {
        return this.phone ? false : true
      },
      unique: true,
      trim: true,
      lowercase: true
    },
    phone: {
      type: String,
      required: function () {
        return this.email ? false : true
      }
    },
    password: {
      type: String,
      minlength: 8,
      required: function () {
        return this.provider === 'local';
      }
    },
    provider: {
      type: String,
      enum: ['local', 'google', 'facebook'],
      default: 'local'
    }

  },
  {
    statics: false,
    // timestamps: {
    //   updatedAt: true,
    //   createdAt: true
    // },
    timestamps: true
  }
)

export const User = model('User', schema);



// User.create();
// User.findOne();

// db.users.insertOne();
// db.users.findOne();