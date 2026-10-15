const { PrismaClient } = require('@prisma/client');
// establish connect to DB
const prisma = new PrismaClient({
  log: ['query']
});

module.exports = { prisma }