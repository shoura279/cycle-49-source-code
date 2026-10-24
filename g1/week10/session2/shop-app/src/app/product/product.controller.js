import * as productService from './product.service.js';

export async function createProduct(req, res, next) {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json({ message: "product created successfully", success: true, data: product });
  } catch (error) {
    next(error)
  }
}


export async function updateProduct(req, res, next) {
  try {
    const { id, userId } = req.params;
    console.log({ id });

    // const { } = req.body;
    const product = await productService.updateProduct(id, userId, req.body);
    res.json({ message: "updated product successfully", success: true, data: product });
  } catch (error) {
    next(error);
  }
}