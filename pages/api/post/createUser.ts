import prisma from '../../../lib/prisma';

const bcrypt = require('bcrypt');
const saltRounds = 10;

export default async function handle(req, res) {
  const { username, password, name } = req.body;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPW = bcrypt.hashSync(password, salt);
  const result = await prisma.user.create({
    data: {
      username: username,
      password: hashedPW,
      name: name,
    },
  });
  res.json(result);
}