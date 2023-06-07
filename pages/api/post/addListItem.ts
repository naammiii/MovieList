// pages/api/post/index.ts

import prisma from '../../../lib/prisma';

// POST /api/post
export default async function handle(req, res) {
  const { titleid, userid, categoryid } = req.body;
  const result = await prisma.list.create({
    data: {
      userId: userid,
      itemId: titleid,
      categoryId: categoryid
    },
  });
  res.json(result);
}