import prisma from '../../../lib/prisma';

export default async function handle(req, res) {
  const { titleid, userid, categoryid } = req.body;

  const result = await prisma.list.create({
    data: {
      itemId: titleid,
      user: { connect: { id: parseInt(userid) } },
      category: { connect: { id: parseInt(categoryid) } }
    },
  });
  res.json(result);
}