// pages/api/post/index.ts

import prisma from '../../../lib/prisma';

// POST /api/post
export default async function handle(req, res) {
  const { titleid, userid, categoryid } = req.body;

  const result = await prisma.list.findFirst({
    where: {
      itemId: titleid,
      userId: parseInt(userid)
    }
  }
  );

  const edit = await prisma.list.update({
    where: { listid: result.listid },
    data: {
      category: { connect: { id: parseInt(categoryid) } }
    }
  })

  res.json(edit);

}