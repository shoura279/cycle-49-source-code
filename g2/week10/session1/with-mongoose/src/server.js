import express from 'express';
import './common/db/connection.js'
import { router } from './routes.js';

const app = express();

// middleware to parse body from req
app.use(express.json());

app.use('/api', router);
// global error handler:
app.use((error, req, res, next) => {
  res.json({ message: error.message, success: false });
})

app.listen(3000, () => {
  console.log('server is running on port 3000');
});