import { model, Schema } from 'mongoose';

const schema = new Schema(
  {
    name: { type: String, required: true, minlength: 3 },
    price: { type: Number, required: true, min: 0 },
    currency: { type: String, enum: ['EGP', 'USD'], default: "EGP" },
    stock: { type: Number, required: true, min: 0 },
    metadata: { type: Object, default: {} },
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true }
  },
  {
    timestamps: true,
    id: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    optimisticConcurrency: true,
  }
)
export const Product = model('Product', schema);


// race condition:
// when turn on optimisticConcurrency
// >> __V:2 >> 1. buy product we update stock - quantity. >> __V:3
// >> __V:2 >> 2. buy product we update stock - quantity. >> commit into DB >> fail >> not update
// __V:0