const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getUsers = () => prisma.user.findMany();

module.exports = { getUsers };
