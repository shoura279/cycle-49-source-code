import { Router } from "express";
import * as productController from './product.controller.js';
import { Product } from "../../common/db/product.model.js";
export const productRouter = Router();

productRouter.post('/', productController.createProduct);
productRouter.put('/:id/:userId', productController.updateProduct);
productRouter.get('/', async (req, res, next) => {
  const products = await Product.find();
  res.json(products);
})