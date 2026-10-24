import { Product } from "../../common/db/product.model.js";

export async function createProduct(data) {
  const product = new Product(data);
  const createdProduct = await product.save();// doc exists >> update | not exists >> create
  return createdProduct;

}

export async function findProductById(id) {
  const product = await Product.findOne({ _id: id });
  return product;// null | productDoc
}

// newData >> is an object
// spreed operator >> { ...{name,stock} } >> { name,stock }
export async function updateProduct(id, newData) {
  const updatedProduct = await Product.findOneAndUpdate(
    { _id: id },
    { ...newData, $inc: { __v: 1 } },
    { returnDocument: 'after' }
  );
  return updatedProduct;
}