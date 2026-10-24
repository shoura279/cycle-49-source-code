import express from 'express';
import './common/db/connection.js';
import { authRouter } from './app/auth/auth.router.js';
import { productRouter } from './app/product/product.router.js';

const app = express();

app.use(express.json());

app.use('/auth', authRouter);
app.use('/product', productRouter);

// handle invalid routes.
app.use((req, res, next) => {
  res.json({ message: "invalid routing", success: false });
});

app.use((error, req, res, next) => {
  res.json({ message: error.message, success: false });
});

app.listen(3000, () => {
  console.log('server is running on port 3000');
});