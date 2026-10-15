import { Router } from 'express';
import * as blogController from './blog.controller.js'
export const blogRouter = Router();


// url >> /blog - method >> POST
blogRouter.post('/', blogController.createBlog);


function sum() {
  return 1 + 2;
}

// module.exports = {
//   blogRouter,
//   sum
// }