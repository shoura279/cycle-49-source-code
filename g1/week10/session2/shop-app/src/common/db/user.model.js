import { model, Schema } from 'mongoose'

const schema = new Schema(
  {
    firstName: {
      type: String,
      trim: true, // '  ka3bora ' >> ' KA3BORA '
      minlength: 2,
      required: true,
      lowercase: true,
    },
    lastName: {
      type: String,
      trim: true, // '  ka3bora ' >> ' KA3BORA '
      minlength: 2,
      required: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    dob: Date,
    role: {
      type: String,
      enum: ['customer', 'seller'],
      default: 'customer',
    }
  },
  {
    timestamps: true,
    id: true,// virtual field
    toJSON: { virtuals: true },// any format of JSON display virtuals
    toObject: { virtuals: true }// any format of Object display virtuals
  }
)
// field not stored into DB
// getter 
// setter
schema.virtual('fullName')
  .get(function () {
    return this.firstName + ' ' + this.lastName;
  });

schema.virtual('age')
  .get(function () {
    return new Date().getFullYear() - new Date(this.dob).getFullYear();// 2026 - 2000 >> 26
  });

export const User = model('User', schema);


/**
 * {
 * _id: ObjectId('12345678998765432'),
 * firstName:"",
 * lastName:"",
 * ...
 * }
 */

// {} === {}  >> ref == ref
// _id >> ObjectId('12345678998765432') === ObjectId('12345678998765432')
// mongodb native >> ObjectId('12345678998765432').toString() === ObjectId('12345678998765432').toString()
// mongoose >> id === id
// id is a string version of objectId