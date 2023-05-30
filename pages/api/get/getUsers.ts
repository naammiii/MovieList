import prisma from '../../../lib/prisma';

export default async function getUsers(req, res) {
    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
    res.json(allUsers);
}