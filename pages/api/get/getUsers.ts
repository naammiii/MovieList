// pages/api/post/index.ts

import prisma from '../../../lib/prisma';

const bcrypt = require('bcrypt');
const saltRounds = 10;

// POST /api/get
export default async function handle(req, res) {
    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
    res.json(allUsers);
}