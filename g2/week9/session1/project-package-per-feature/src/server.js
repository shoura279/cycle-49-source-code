const express = require('express');
const { prisma } = require('./common/db/connection')
const { router } = require('./route');
const app = express();

// check health
app.get('/health', async (req, res, next) => {
  const [data] = await prisma.$queryRaw`SELECT 1+1 AS summation`;
  res.json('ok');
});

// parsing incoming req body
app.use(express.json());
// url == /api/user/
app.use('/api', router);

app.listen(3000, () => {
  console.log('server is running on port 3000');
});