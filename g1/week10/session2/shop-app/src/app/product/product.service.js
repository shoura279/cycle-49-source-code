import * as userRepository from '../user/user.repository.js';
import * as productRepository from './product.repository.js';

export async function createProduct(data) {
  // owner >> id 
  // data:{name,price,stock,metadata,owner}
  // 1. check seller exists.
  const seller = await userRepository.findUserById(data.owner);// {} | null

  // 2. if not exists >> throw an error.
  if (!seller) throw new Error('Seller dose not exits');

  // 3. save product into DB
  const product = await productRepository.createProduct(data);
  return product;
}

// id: >> product id
// userId: >> user id who want to update this product
// new data >> updated data
export async function updateProduct(id, userId, newData) {
  // 1. check product exists
  const product = await productRepository.findProductById(id);
  if (!product) throw new Error('Product not Found');
  // 2. check owner
  if (userId !== product.owner.toString()) throw new Error('not authorized to update this product');
  // 3. update product
  const updatedProduct = await productRepository.updateProduct(id, newData);
  return updatedProduct;
}