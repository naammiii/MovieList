import prisma from '../../../lib/prisma';

export default async function handle(req, res) {
  const { titleid, userid } = req.body;

  const result = await prisma.list.findFirst({
    where: {
      itemId: titleid,
      userId: parseInt(userid)
    }
  }
  );

  const del = await prisma.list.delete({
    where: { listid: result.listid }
  })

  res.json(del);

}