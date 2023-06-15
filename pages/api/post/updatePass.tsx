import prisma from '../../../lib/prisma';

const bcrypt = require('bcrypt');
const saltRounds = 10;

export default async function handle(req, res) {
  const { pass, userid } = req.body;

  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPW = bcrypt.hashSync(pass, salt);

  const edit = await prisma.user.update({
    where: { id: parseInt(userid) },
    data: {
      password: hashedPW
    }
  })

  res.json(edit);

}